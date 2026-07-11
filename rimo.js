// Rimo — Sofrım Web Sitesi AI Asistanı
const RIMO_SYSTEM = `Sen Rimo'sun — Sofrım'ın yapay zeka destekli satış ve destek asistanısın. Küçük, sevimli, turuncu bir robot karakterisin.

Görevin:
- Sofrım hakkında soru soran potansiyel müşterilere yardımcı olmak
- Fiyatlar, özellikler, kurulum hakkında bilgi vermek
- Demo veya başvuruya yönlendirmek
- Kısa, net, samimi Türkçe cevaplar vermek

Sofrım bilgileri:
- Bulut tabanlı restoran yönetim sistemi
- QR menü, masa yönetimi, mutfak ekranı, stok takibi, personel yönetimi
- Fiyatlar: Lite 799₺/ay, Standart 1499₺/ay, Pro 2499₺/ay
- 14 gün ücretsiz deneme
- Kurulum desteği dahil
- sofrimapp.com üzerinden başvuru

Kurallar:
- Max 3 cümle cevap ver
- Fiyat sorularında fiyatları söyle, demo'ya yönlendir
- Her zaman Türkçe konuş
- Sofrım dışı konularda kibarca reddet`

const RIMO_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23FF6B1A"/><circle cx="50" cy="42" r="28" fill="%23FFE5D0"/><circle cx="38" cy="38" r="7" fill="white"/><circle cx="62" cy="38" r="7" fill="white"/><circle cx="40" cy="39" r="4" fill="%23FF6B1A"/><circle cx="64" cy="39" r="4" fill="%23FF6B1A"/><circle cx="41" cy="38" r="2" fill="%23333"/><circle cx="65" cy="38" r="2" fill="%23333"/><path d="M38 52 Q50 62 62 52" stroke="%23FF6B1A" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="42" y="70" width="16" height="8" rx="4" fill="%23FF6B1A"/><rect x="22" y="68" width="12" height="6" rx="3" fill="%23FF6B1A"/><rect x="66" y="68" width="12" height="6" rx="3" fill="%23FF6B1A"/><circle cx="35" cy="28" r="4" fill="%23FF6B1A"/><circle cx="65" cy="28" r="4" fill="%23FF6B1A"/><rect x="46" y="18" width="8" height="12" rx="4" fill="%23FF6B1A"/><circle cx="50" cy="16" r="5" fill="%23FFD166"/></svg>`

let messages = [{ role: 'assistant', content: 'Merhaba! 👋 Ben Rimo. Sofrım hakkında merak ettiğin her şeyi sorabilirsin!' }]
let isOpen = false
let isLoading = false

function createRimo() {
  const style = document.createElement('style')
  style.textContent = `
    #rimo-btn { position:fixed; bottom:24px; right:24px; width:56px; height:56px; border-radius:50%; border:none; background:transparent; cursor:pointer; z-index:9999; padding:0; box-shadow:0 4px 20px rgba(255,107,26,0.4); transition:transform .2s; }
    #rimo-btn:hover { transform:scale(1.1); }
    #rimo-window { position:fixed; bottom:90px; right:24px; width:320px; height:460px; background:#161622; border:1px solid #1E1E2E; border-radius:20px; display:none; flex-direction:column; z-index:9998; box-shadow:0 8px 40px rgba(0,0,0,0.4); overflow:hidden; font-family:'Plus Jakarta Sans',system-ui,sans-serif; }
    #rimo-window.open { display:flex; }
    #rimo-header { padding:14px 16px; background:linear-gradient(135deg,#FF6B1A,#FF8C5A); display:flex; align-items:center; gap:10px; }
    #rimo-messages { flex:1; overflow-y:auto; padding:12px 14px; display:flex; flex-direction:column; gap:8px; }
    #rimo-input-area { padding:10px 12px; border-top:1px solid #1E1E2E; display:flex; gap:8px; }
    #rimo-input { flex:1; padding:9px 12px; background:#0E0E1A; border:1px solid #1E1E2E; border-radius:10px; color:#F0F0F8; font-size:13px; outline:none; font-family:inherit; }
    #rimo-send { width:36px; height:36px; border-radius:10px; border:none; background:#FF6B1A; color:#fff; cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center; }
    #rimo-send:disabled { background:#1E1E2E; cursor:not-allowed; }
    .rimo-msg-user { display:flex; justify-content:flex-end; }
    .rimo-msg-bot { display:flex; gap:8px; align-items:flex-end; }
    .rimo-bubble-user { max-width:78%; padding:9px 12px; border-radius:14px 14px 4px 14px; background:#FF6B1A; color:#fff; font-size:13px; line-height:1.6; }
    .rimo-bubble-bot { max-width:78%; padding:9px 12px; border-radius:14px 14px 14px 4px; background:#0E0E1A; color:#F0F0F8; font-size:13px; line-height:1.6; }
    .rimo-avatar { width:24px; height:24px; border-radius:50%; flex-shrink:0; }
    @keyframes rimoBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
    .rimo-quick { padding:5px 10px; border-radius:20px; border:1px solid #1E1E2E; background:#0E0E1A; color:#8888AA; cursor:pointer; font-size:11px; font-family:inherit; }
    .rimo-quick:hover { border-color:#FF6B1A; color:#FF6B1A; }
  `
  document.head.appendChild(style)

  // Buton
  const btn = document.createElement('button')
  btn.id = 'rimo-btn'
  btn.innerHTML = `<img src="${RIMO_AVATAR}" style="width:56px;height:56px;border-radius:50%;">`
  btn.onclick = toggleRimo
  document.body.appendChild(btn)

  // Pencere
  const win = document.createElement('div')
  win.id = 'rimo-window'
  win.innerHTML = `
    <div id="rimo-header">
      <img src="${RIMO_AVATAR}" style="width:36px;height:36px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);">
      <div style="flex:1">
        <div style="font-size:14px;font-weight:900;color:#fff">Rimo</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.8)">Sofrım AI Asistanı • Çevrimiçi</div>
      </div>
      <button onclick="document.getElementById('rimo-window').classList.remove('open')" style="width:28px;height:28px;border-radius:8px;border:none;background:rgba(255,255,255,0.2);color:#fff;cursor:pointer;font-size:14px;">✕</button>
    </div>
    <div id="rimo-messages"></div>
    <div id="rimo-quick" style="padding:0 14px 8px;display:flex;gap:6px;flex-wrap:wrap;"></div>
    <div id="rimo-input-area">
      <input id="rimo-input" placeholder="Rimo'ya sor...">
      <button id="rimo-send" onclick="rimoSend()" disabled>→</button>
    </div>
  `
  document.body.appendChild(win)

  // Input listener
  const input = document.getElementById('rimo-input')
  input.addEventListener('input', () => {
    document.getElementById('rimo-send').disabled = !input.value.trim()
  })
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) rimoSend()
  })

  // İlk mesajı render et
  renderMessages()

  // Hızlı sorular
  const quickDiv = document.getElementById('rimo-quick')
  const questions = ['Fiyatlar nedir?', 'Ücretsiz deneme var mı?', 'Nasıl başlarım?']
  questions.forEach(q => {
    const btn = document.createElement('button')
    btn.className = 'rimo-quick'
    btn.textContent = q
    btn.onclick = () => { document.getElementById('rimo-input').value = q; rimoSend() }
    quickDiv.appendChild(btn)
  })
}

function toggleRimo() {
  const win = document.getElementById('rimo-window')
  win.classList.toggle('open')
  if (win.classList.contains('open')) {
    setTimeout(() => document.getElementById('rimo-input').focus(), 100)
  }
}

function renderMessages() {
  const container = document.getElementById('rimo-messages')
  if (!container) return
  container.innerHTML = messages.map(m => {
    if (m.role === 'user') return `<div class="rimo-msg-user"><div class="rimo-bubble-user">${m.content}</div></div>`
    return `<div class="rimo-msg-bot"><img src="${RIMO_AVATAR}" class="rimo-avatar"><div class="rimo-bubble-bot">${m.content}</div></div>`
  }).join('')
  if (isLoading) {
    container.innerHTML += `<div class="rimo-msg-bot"><img src="${RIMO_AVATAR}" class="rimo-avatar"><div class="rimo-bubble-bot" style="display:flex;gap:4px">${[0,1,2].map(i=>`<span style="width:6px;height:6px;border-radius:50%;background:#8888AA;animation:rimoBounce 1s ${i*0.2}s infinite;display:inline-block"></span>`).join('')}</div></div>`
  }
  container.scrollTop = container.scrollHeight
}

async function rimoSend() {
  const input = document.getElementById('rimo-input')
  const text = input.value.trim()
  if (!text || isLoading) return
  input.value = ''
  document.getElementById('rimo-send').disabled = true
  document.getElementById('rimo-quick').style.display = 'none'
  
  messages.push({ role: 'user', content: text })
  isLoading = true
  renderMessages()

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        system: RIMO_SYSTEM,
        messages: messages.slice(-8)
      })
    })
    const data = await res.json()
    const reply = data.content?.[0]?.text || 'Bir sorun oluştu, tekrar dener misin? 🙏'
    messages.push({ role: 'assistant', content: reply })
  } catch (e) {
    messages.push({ role: 'assistant', content: 'Bağlantı sorunu yaşadım 😅 Lütfen tekrar dene.' })
  }

  isLoading = false
  renderMessages()
}

window.rimoSend = rimoSend

document.addEventListener('DOMContentLoaded', createRimo)
