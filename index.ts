// supabase/functions/rimo-proxy/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const GROQ_KEY = Deno.env.get('GROQ_API_KEY') || ''

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })
  try {
    const { messages, system } = await req.json()

    const groqMessages = [
      { role: 'system', content: system },
      ...messages
    ]

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 400,
        messages: groqMessages,
      }),
    })

    const data = await res.json()
    const text = data.choices?.[0]?.message?.content || 'Bir sorun oluştu, tekrar dener misin? 🙏'

    return new Response(JSON.stringify({ content: [{ text }] }), {
      headers: { ...CORS, 'Content-Type': 'application/json' }
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' }
    })
  }
})
