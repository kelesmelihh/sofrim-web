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
    { href: 'bayi.html', label: 'Bayi Ol', id: 'bayi' },
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
          <div class="footer-ver">
            <a href="https://mksoftware.com.tr" target="_blank" style="color:var(--sec);text-decoration:none;font-weight:700;">MK Software</a> · Melih Keleş · v2.2.0
          </div>
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
      <div id="trust-badges"></div>
      <div class="footer-bottom">
        <div class="footer-copy">
          <span class="footer-copy-text">© 2026 Sofrım · <a href="https://mksoftware.com.tr" target="_blank" style="color:var(--sec);text-decoration:none;font-weight:700;">MK Software</a> · Melih Keleş · Yenimahalle VD · VN: 5431084511</span>
          <img src="${PAYMENT_LOGO}" alt="Visa Mastercard" style="height:26px;opacity:.8;" onerror="this.style.display='none'">
        </div>
        <div class="footer-warning">
          <strong>⚠️ Güvenli Alışveriş:</strong> Sofrım yalnızca <strong style="color:var(--text);">sofrimapp.com</strong> üzerinden satılmaktadır.
        </div>
      </div>
    </footer>
    <a class="whatsapp-btn" href="https://wa.me/903128201013" target="_blank">💬</a>
  `;
  renderTrustBadges();
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
      <div class="intro-mk">by <a href="https://mksoftware.com.tr" target="_blank" style="color:inherit;text-decoration:none;">MK Software</a> · v2.2.0</div>
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
  const path = window.location.pathname;
  if (path === '/' || path.endsWith('index.html') || path === '' || path.endsWith('bayi.html')) renderIntro();
  loadTenantCount();
  initStickyCTA();
  initExitPopup();
});
// ─── STICKY CTA ───────────────────────────────────────────────
function initStickyCTA() {
  const path = window.location.pathname;
  if (path.includes('apply.html')) return;
  const bar = document.createElement('div');
  bar.id = 'sticky-cta';
  bar.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;max-width:900px;margin:0 auto;gap:16px;flex-wrap:wrap;">
      <div>
        <div style="font-size:14px;font-weight:800;color:#fff;">Sofrım'ı ücretsiz deneyin</div>
        <div style="font-size:12px;color:rgba(255,255,255,.7);">14 gün · Kredi kartı gerekmez · Hemen başlayın</div>
      </div>
      <a href="apply.html" style="padding:10px 24px;border-radius:10px;background:#fff;color:var(--accent);font-size:13px;font-weight:800;text-decoration:none;white-space:nowrap;flex-shrink:0;">Başvuru Yap →</a>
    </div>
  `;
  bar.style.cssText = `
    position:fixed;bottom:0;left:0;right:0;z-index:500;
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    padding:14px 24px;
    box-shadow:0 -4px 24px rgba(255,107,26,.4);
    transform:translateY(100%);
    transition:transform .3s ease;
  `;
  document.body.appendChild(bar);
  let shown = false;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400 && !shown) {
      shown = true;
      bar.style.transform = 'translateY(0)';
    } else if (window.scrollY < 100 && shown) {
      shown = false;
      bar.style.transform = 'translateY(100%)';
    }
  }, { passive: true });
}
// ─── ÇIKIŞ NİYETİ POPUP ──────────────────────────────────────
function initExitPopup() {
  const path = window.location.pathname;
  if (path.includes('apply.html')) return;
  if (sessionStorage.getItem('exitPopupShown')) return;
  const overlay = document.createElement('div');
  overlay.id = 'exit-popup';
  overlay.style.cssText = `
    display:none;position:fixed;inset:0;z-index:9000;
    background:rgba(0,0,0,.85);
    align-items:center;justify-content:center;padding:20px;
  `;
  overlay.innerHTML = `
    <div style="background:var(--card);border:1.5px solid var(--border);border-radius:24px;padding:40px 36px;max-width:460px;width:100%;text-align:center;position:relative;">
      <button onclick="closeExitPopup()" style="position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:1px solid var(--border);background:var(--surface);color:var(--sec);cursor:pointer;font-size:16px;">✕</button>
      <div style="font-size:48px;margin-bottom:16px;">🍽️</div>
      <h3 style="font-size:22px;font-weight:900;margin-bottom:10px;">Bekleyin!</h3>
      <p style="font-size:14px;color:var(--sec);line-height:1.7;margin-bottom:24px;">Sofrım'ı <strong style="color:var(--text);">14 gün ücretsiz</strong> deneyebilirsiniz. Kredi kartı gerekmez, istediğiniz zaman iptal edebilirsiniz.</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="apply.html" onclick="closeExitPopup()" style="padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff;font-size:14px;font-weight:800;text-decoration:none;display:block;">Ücretsiz Deneyin →</a>
        <button onclick="closeExitPopup()" style="padding:12px;border-radius:12px;border:1px solid var(--border);background:transparent;color:var(--sec);font-size:13px;cursor:pointer;">Hayır teşekkürler</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  let triggered = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 10 && !triggered) {
      triggered = true;
      overlay.style.display = 'flex';
      sessionStorage.setItem('exitPopupShown', '1');
    }
  });
  setTimeout(() => {
    if (!triggered) {
      triggered = true;
      overlay.style.display = 'flex';
      sessionStorage.setItem('exitPopupShown', '1');
    }
  }, 60000);
}
function closeExitPopup() {
  const p = document.getElementById('exit-popup');
  if (p) p.style.display = 'none';
}
// ─── FOOTER GÜVEN İKONLARI ───────────────────────────────────
function renderTrustBadges() {
  const el = document.getElementById('trust-badges');
  if (!el) return;
  el.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;align-items:center;padding:20px 0;border-top:1px solid var(--border);margin-top:16px;">
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);font-weight:600;">
        <span style="font-size:16px;">🔒</span> SSL Şifrelemeli
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);font-weight:600;">
        <span style="font-size:16px;">🇹🇷</span> Türkiye'de Geliştiriliyor
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);font-weight:600;">
        <span style="font-size:16px;">🛡️</span> KVKK Uyumlu
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);font-weight:600;">
        <span style="font-size:16px;">☁️</span> 7/24 Bulut Erişim
      </div>
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted);font-weight:600;">
        <span style="font-size:16px;">🏢</span> <a href="https://mksoftware.com.tr" target="_blank" style="color:var(--muted);text-decoration:none;font-weight:600;">MK Software</a>
      </div>
    </div>
  `;
}
