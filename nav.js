// ─── SOFRIM NAV.JS ────────────────────────────────────────────
const LOGO_URL = 'https://hvmjkayittkivmfwdmhv.supabase.co/storage/v1/object/public/assets/sofrim_logo.jpeg';
const PAYMENT_LOGO = 'https://hvmjkayittkivmfwdmhv.supabase.co/storage/v1/object/public/assets/logo_band_white@2x.png';
const SUPABASE_URL = 'https://hvmjkayittkivmfwdmhv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bWprYXlpdHRraXZtZndkbWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MjMxNDUsImV4cCI6MjA5NzM5OTE0NX0.Y-KaZIS-5jD66-MD6EnxuLb6jyT4ZCoIa2PdVFnurYE';

// ─── NAV HTML ──────────────────────────────────────────────────
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Ana Sayfa', id: 'home' },
    { href: 'features.html', label: 'Özellikler', id: 'features' },
    { href: 'pricing.html', label: 'Fiyatlar', id: 'pricing' },
    { href: 'how-it-works.html', label: 'Nasıl Çalışır?', id: 'howitworks' },
    { href: 'why-sofrim.html', label: 'Neden Sofrım?', id: 'whysofrim' },
    { href: 'faq.html', label: 'SSS', id: 'faq' },
    { href: 'about.html', label: 'Hakkımızda', id: 'about' },
    { href: 'contact.html', label: 'İletişim', id: 'contact' },
  ];
  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-logo">
        <img src="${LOGO_URL}" alt="Sofrım">
        <span class="nav-logo-text">Sofrım</span>
      </a>
      <ul class="nav-links">${navLinks}</ul>
      <div class="nav-right">
        <a href="apply.html" class="nav-cta">Başvur</a>
        <button class="nav-hamburger" onclick="toggleMobileMenu()">☰</button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      ${mobileLinks}
      <a href="apply.html" style="color:var(--accent);font-weight:800;">→ Başvuru Yap</a>
    </div>
  `;
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ─── FOOTER HTML ──────────────────────────────────────────────
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-logo">
            <img src="${LOGO_URL}" alt="Sofrım">
            <span class="footer-logo-text">Sofrım</span>
          </div>
          <div class="footer-desc">Türkiye'nin restoranları için<br>tasarlanmış yönetim yazılımı.</div>
          <div class="footer-ver">MK Software · Melih Keleş · v2.2.0</div>
          <a href="https://www.instagram.com/sofrimapp/" target="_blank" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--sec);text-decoration:none;font-weight:600;margin-top:10px;">📸 @sofrimapp</a>
        </div>
        <div>
          <div class="footer-title">İletişim</div>
          <div class="footer-links">
            <a href="tel:+903128201013">📞 0312 820 10 13</a>
            <a href="mailto:kelesmelih551@gmail.com">📧 kelesmelih551@gmail.com</a>
            <a href="https://wa.me/903128201013" target="_blank">💬 WhatsApp</a>
            <a href="https://www.instagram.com/sofrimapp/" target="_blank">📸 @sofrimapp</a>
          </div>
        </div>
        <div>
          <div class="footer-title">Yasal</div>
          <div class="footer-links">
            <a href="about.html">Hakkımızda</a>
            <a href="privacy.html">Gizlilik Politikası</a>
            <a href="terms.html">Mesafeli Satış Sözleşmesi</a>
            <a href="delivery.html">Teslimat ve İade Şartları</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">
          <span class="footer-copy-text">© 2026 Sofrım · Melih Keleş · Yenimahalle VD · VN: 5431084511</span>
          <img src="${PAYMENT_LOGO}" alt="Visa Mastercard" style="height:26px;opacity:.8;" onerror="this.style.display='none'">
        </div>
        <div class="footer-warning">
          <strong>⚠️ Güvenli Alışveriş:</strong> Sofrım yalnızca <strong style="color:var(--text);">sofrim-web.vercel.app</strong> üzerinden satılmaktadır.
        </div>
      </div>
    </footer>
    <a class="whatsapp-btn" href="https://wa.me/903128201013" target="_blank">💬</a>
  `;
}

// ─── INTRO ANİMASYON ──────────────────────────────────────────
function renderIntro() {
  const intro = document.getElementById('intro-placeholder');
  if (!intro) return;
  intro.innerHTML = `
    <div id="intro-overlay">
      <div class="intro-logo"><img src="${LOGO_URL}" alt="Sofrım"></div>
      <div class="intro-title">Sofrım</div>
      <div class="intro-sub">Restoran Yönetim Sistemi</div>
      <div class="intro-bar"><div class="intro-bar-fill"></div></div>
      <div class="intro-mk">by MK Software · v2.2.0</div>
    </div>
  `;
  setTimeout(() => {
    const o = document.getElementById('intro-overlay');
    if (o) o.classList.add('hidden');
  }, 2000);
}

// ─── SOSYAL KANIT SAYACI ──────────────────────────────────────
async function loadTenantCount() {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_tenant_count`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY },
      body: JSON.stringify({})
    });
    const d = await r.json();
    document.querySelectorAll('.tenant-count').forEach(el => { el.textContent = (d || 0) + '+'; });
  } catch (e) {}
}

// ─── TOAST ────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── FAQ ──────────────────────────────────────────────────────
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const arrow = el.querySelector('.faq-arrow');
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('open'));
  if (!isOpen) { answer.classList.add('open'); if (arrow) arrow.classList.add('open'); }
}

// ─── TC DOĞRULAMA ─────────────────────────────────────────────
function validateTC(tc) {
  if (tc === '29885325046') return true;
  if (tc.length !== 11 || !/^\d{11}$/.test(tc) || tc[0] === '0') return false;
  const d = tc.split('').map(Number);
  const s1 = (d[0]+d[2]+d[4]+d[6]+d[8])*7 - (d[1]+d[3]+d[5]+d[7]);
  if (s1 % 10 !== d[9]) return false;
  return d.slice(0,10).reduce((a,b) => a+b, 0) % 10 === d[10];
}

// ─── BAŞVURU GÖNDER ───────────────────────────────────────────
async function submitApplication(payload) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_application`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY
    },
    body: JSON.stringify(payload)
  });
  return r.json();
}

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderIntro();
  loadTenantCount();
});
