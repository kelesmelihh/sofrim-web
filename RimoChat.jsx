// src/components/RimoChat.jsx — Rimo AI Asistan
import { useState, useRef, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../hooks/useAuth'
import { T } from '../theme'

const RIMO_SYSTEM = `Sen Rimo'sun — Sofrım'ın yapay zeka destekli restoran asistanı. Küçük, sevimli, turuncu bir robot karakterisin.

Görevin:
- Sofrım kullanıcılarına (restoran sahipleri ve yöneticileri) yardım etmek
- Sistem kullanımı, özellikler, sorun giderme konularında destek vermek
- Kısa, net, samimi Türkçe cevaplar vermek
- Gerektiğinde destek ticketi açılmasını önermek

Sofrım hakkında bilgiler:
- Bulut tabanlı restoran yönetim sistemi
- QR menü, masa yönetimi, sipariş takibi, mutfak ekranı (KDS)
- Stok takibi, personel yönetimi, raporlar
- Paket servis ve gel-al yönetimi
- Müşteri sadakat sistemi
- Çok şubeli yönetim
- sofrimapp.online üzerinden erişilir

Kurallar:
- Cevaplar kısa tut (max 3-4 cümle)
- Emoji kullan ama abartma
- Bilmediğin teknik detaylarda "Destek ekibimize bağlanayım" de
- Her zaman Türkçe konuş
- Sofrım dışı konularda kibarca reddet`

// Rimo Avatar Component
function RimoAvatar({ size = 36 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B1A, #FF8C5A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.5, flexShrink: 0 }}>
      🤖
    </div>
  )
}

export default function RimoChat() {
  const { profile } = useAuth()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Merhaba! 👋 Ben Rimo, Sofrım asistanın. Sana nasıl yardımcı olabilirim?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(0)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)

    try {
      const history = messages.slice(-8).map(m => ({ role: m.role, content: m.content }))
      const res = await fetch('https://hvmjkayittkivmfwdmhv.supabase.co/functions/v1/rimo-proxy', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bWprYXlpdHRraXZtZndkbWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MjMxNDUsImV4cCI6MjA5NzM5OTE0NX0.Y-KaZIS-5jD66-MD6EnxuLb6jyT4ZCoIa2PdVFnurYE'},
        body: JSON.stringify({ system: RIMO_SYSTEM, messages: [...history, { role: 'user', content: userMsg }] })
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Bir sorun oluştu, tekrar dener misin? 🙏'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      if (!open) setUnread(prev => prev + 1)

      // Ticket önerisini tespit et
      if (reply.includes('destek ekib') || reply.includes('ticket')) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'system', 
            content: 'ticket_offer'
          }])
        }, 500)
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Bağlantı sorunu yaşadım 😅 Lütfen tekrar dene.' }])
    }
    setLoading(false)
  }

  async function openTicket() {
    const lastUserMsg = messages.filter(m => m.role === 'user').slice(-1)[0]?.content || 'Rimo üzerinden destek talebi'
    await supabase.from('support_tickets').insert({
      tenant_id: profile?.tenant_id,
      title: lastUserMsg.slice(0, 100),
      description: messages.filter(m => m.role !== 'system').map(m => `${m.role === 'user' ? 'Kullanıcı' : 'Rimo'}: ${m.content}`).join('\n'),
      category: 'general',
      source: 'app',
      priority: 'medium',
      status: 'open'
    })
    setMessages(prev => [...prev, { role: 'assistant', content: '✅ Destek talebinizi oluşturdum! Ekibimiz en kısa sürede size dönecek.' }])
  }

  return (
    <>
      {/* Floating Buton */}
      <button onClick={() => setOpen(v => !v)}
        style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 999, padding: 0, boxShadow: '0 4px 20px rgba(255,107,26,0.4)', transition: 'transform .2s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        <RimoAvatar size={56} />
        {unread > 0 && (
          <span style={{ position: 'absolute', top: -2, right: -2, width: 18, height: 18, borderRadius: '50%', background: T.red, color: '#fff', fontSize: 10, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{unread}</span>
        )}
      </button>

      {/* Chat Penceresi */}
      {open && (
        <div style={{ position: 'fixed', bottom: 90, right: 24, width: 340, height: 480, background: T.card, border: `1px solid ${T.border}`, borderRadius: 20, display: 'flex', flexDirection: 'column', zIndex: 998, boxShadow: '0 8px 40px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ padding: '14px 16px', background: `linear-gradient(135deg, ${T.accent}, #FF8C5A)`, display: 'flex', alignItems: 'center', gap: 10 }}>
            <RimoAvatar size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: '#fff' }}>Rimo</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)' }}>Sofrım AI Asistanı • Çevrimiçi</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ width: 28, height: 28, borderRadius: 8, border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>

          {/* Mesajlar */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {messages.map((msg, i) => {
              if (msg.role === 'system' && msg.content === 'ticket_offer') {
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={openTicket} style={{ padding: '8px 16px', borderRadius: 20, border: `1px solid ${T.accent}`, background: `${T.accent}15`, color: T.accent, cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>
                      🎫 Destek Talebi Oluştur
                    </button>
                  </div>
                )
              }
              const isUser = msg.role === 'user'
              return (
                <div key={i} style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', gap: 8, alignItems: 'flex-end' }}>
                  {!isUser && <RimoAvatar size={24} />}
                  <div style={{ maxWidth: '78%', padding: '9px 12px', borderRadius: isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: isUser ? T.accent : T.surface, color: isUser ? '#fff' : T.text, fontSize: 13, lineHeight: 1.6 }}>
                    {msg.content}
                  </div>
                </div>
              )
            })}
            {loading && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                <RimoAvatar size={24} />
                <div style={{ padding: '9px 14px', borderRadius: '14px 14px 14px 4px', background: T.surface, display: 'flex', gap: 4 }}>
                  {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: T.muted, animation: `bounce 1s ${i*0.2}s infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Hızlı sorular */}
          {messages.length === 1 && (
            <div style={{ padding: '0 14px 8px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['QR menü nasıl kurulur?', 'Stok nasıl eklenir?', 'Personel nasıl eklenir?'].map(q => (
                <button key={q} onClick={() => { setInput(q); setTimeout(() => sendMessage(), 50) }}
                  style={{ padding: '5px 10px', borderRadius: 20, border: `1px solid ${T.border}`, background: T.surface, color: T.sec, cursor: 'pointer', fontSize: 11 }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '10px 12px', borderTop: `1px solid ${T.border}`, display: 'flex', gap: 8 }}>
            <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Rimo'ya sor..." disabled={loading}
              style={{ flex: 1, padding: '9px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, color: T.text, fontSize: 13, outline: 'none' }} />
            <button onClick={sendMessage} disabled={loading || !input.trim()}
              style={{ width: 36, height: 36, borderRadius: 10, border: 'none', background: input.trim() ? T.accent : T.border, color: '#fff', cursor: input.trim() ? 'pointer' : 'not-allowed', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              →
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
