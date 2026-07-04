// ─── SOFRIM NAV.JS ────────────────────────────────────────────
// Ortak nav, footer, onay sistemi ve yardımcı fonksiyonlar

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

// ─── ONAY SİSTEMİ (Scroll-to-read) ──────────────────────────
// consentState: hangi belgeler onaylandı
const consentState = {
  kvkk: false,
  privacy: false,
  terms: false,
  delivery: false
};

let currentConsentKey = null;

function openConsentModal(key) {
  currentConsentKey = key;
  const modal = document.getElementById('consent-modal');
  const body = document.getElementById('consent-modal-body');
  const title = document.getElementById('consent-modal-title');
  const hint = document.getElementById('consent-scroll-hint');
  const btn = document.getElementById('consent-approve-btn');

  title.textContent = CONSENT_TITLES[key];
  body.innerHTML = CONSENT_CONTENTS[key];
  hint.style.opacity = '1';
  btn.className = 'legal-approve-btn disabled';
  btn.textContent = '⬇️ Lütfen metni okuyun';
  btn.disabled = true;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll takibi
  body.scrollTop = 0;
  body.onscroll = () => {
    const scrolled = body.scrollTop + body.clientHeight;
    const total = body.scrollHeight;
    if (scrolled >= total - 40) {
      hint.style.opacity = '0';
      btn.className = 'legal-approve-btn enabled';
      btn.textContent = '✓ Okudum, Onaylıyorum';
      btn.disabled = false;
    }
  };
}

function closeConsentModal() {
  document.getElementById('consent-modal').classList.remove('open');
  document.body.style.overflow = '';
  currentConsentKey = null;
}

function approveConsent() {
  if (!currentConsentKey) return;
  consentState[currentConsentKey] = true;
  
  // Checkbox'ı işaretle
  const item = document.getElementById('consent-' + currentConsentKey);
  if (item) item.classList.add('checked');
  const check = document.getElementById('check-' + currentConsentKey);
  if (check) check.textContent = '✓';

  closeConsentModal();
  checkAllConsents();
}

function checkAllConsents() {
  const allChecked = Object.values(consentState).every(v => v === true);
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.disabled = !allChecked;
    submitBtn.style.opacity = allChecked ? '1' : '.5';
  }
}

// Modal içerikleri
const CONSENT_TITLES = {
  kvkk: '🛡️ KVKK Aydınlatma Metni',
  privacy: '🔒 Gizlilik Politikası',
  terms: '📄 Kullanım Koşulları ve Mesafeli Satış Sözleşmesi',
  delivery: '📦 Teslimat ve İade Şartları'
};

const CONSENT_CONTENTS = {
  kvkk: `
    <h3 style="color:var(--accent);margin-bottom:12px;">KVKK Aydınlatma Metni</h3>
    <p style="margin-bottom:10px;padding:12px;background:rgba(45,212,191,.06);border:1px solid rgba(45,212,191,.2);border-radius:10px;font-size:12px;">
      <strong style="color:#2DD4BF;">Veri Sorumlusu:</strong> Melih Keleş (MK Software)<br>
      Yenimahalle VD · VN: 5431084511 · Ankara, Yenimahalle<br>
      kelesmelih551@gmail.com · 0312 820 10 13
    </p>
    <h4 style="color:var(--text);margin:16px 0 8px;">1. İşlenen Kişisel Veriler</h4>
    <p>Ad soyad, e-posta adresi, telefon numarası, TC kimlik numarası veya vergi numarası, işletme adı ve adresi, vergi dairesi bilgileri.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">2. İşleme Amaçları</h4>
    <p>Başvuru sürecinin yürütülmesi, kimlik doğrulama, hesap oluşturulması ve yönetilmesi, abonelik ve fatura işlemleri, yasal yükümlülüklerin yerine getirilmesi, güvenlik ve dolandırıcılık önleme.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">3. Hukuki Sebepler</h4>
    <p>Sözleşmenin kurulması ve ifası (KVKK md.5/2-c), kanuni yükümlülük (md.5/2-ç), meşru menfaat (md.5/2-f).</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">4. Veri Aktarımı</h4>
    <p>Verileriniz; platform altyapısı için Supabase Inc. (ABD - KVKK m.9 kapsamında yurt dışı aktarım), e-posta iletimi için Resend Inc. ile paylaşılmaktadır. Üçüncü taraflarla ticari amaçla paylaşılmaz.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">5. Saklama Süresi</h4>
    <p>Hesap verileri abonelik sona erdikten 90 gün sonra silinir. Fatura kayıtları 10 yıl saklanır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">6. Haklarınız (KVKK Md. 11)</h4>
    <p>Verilerinize erişim, düzeltme, silme, kısıtlama, itiraz ve taşınabilirlik haklarına sahipsiniz. Talepler için: <strong style="color:var(--accent);">kelesmelih551@gmail.com</strong></p>
    <h4 style="color:var(--text);margin:16px 0 8px;">7. Başvuru</h4>
    <p>KVKK kapsamındaki talepleriniz 30 gün içinde yanıtlanır. Şikayet için Kişisel Verileri Koruma Kurulu'na başvurabilirsiniz.</p>
    <div style="height:40px;"></div>
  `,
  privacy: `
    <h3 style="color:var(--accent);margin-bottom:12px;">Gizlilik Politikası</h3>
    <p style="margin-bottom:10px;padding:12px;background:rgba(45,212,191,.06);border:1px solid rgba(45,212,191,.2);border-radius:10px;font-size:12px;">
      <strong style="color:#2DD4BF;">Veri Sorumlusu:</strong> Melih Keleş · MK Software<br>
      Yenimahalle VD · VN: 5431084511 · Ankara, Yenimahalle
    </p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Toplanan Veriler</h4>
    <p><strong style="color:var(--text);">Kimlik:</strong> Ad soyad, TC/vergi kimlik numarası.<br>
    <strong style="color:var(--text);">İletişim:</strong> E-posta, telefon, adres.<br>
    <strong style="color:var(--text);">İşletme:</strong> İşletme adı, türü, vergi dairesi.<br>
    <strong style="color:var(--text);">Teknik:</strong> IP adresi, tarayıcı bilgisi, oturum verileri.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Kullanım Amacı</h4>
    <p>Veriler yalnızca hizmet sunumu amacıyla işlenmekte, reklam veya pazarlama için kullanılmamaktadır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Güvenlik</h4>
    <p>Tüm veriler SSL/TLS şifrelemesiyle iletilmektedir. Veritabanı Row Level Security (RLS) ile korunmakta, her restoran yalnızca kendi verilerine erişebilmektedir.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Çerezler</h4>
    <p>Yalnızca oturum yönetimi için zorunlu çerezler kullanılmaktadır. Analitik veya reklam çerezi kullanılmamaktadır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Veri Saklama</h4>
    <p>Hesap verileri abonelik sona erdikten 90 gün sonra kalıcı olarak silinir.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">İletişim</h4>
    <p>kelesmelih551@gmail.com · 0312 820 10 13</p>
    <div style="height:40px;"></div>
  `,
  terms: `
    <h3 style="color:var(--accent);margin-bottom:12px;">Kullanım Koşulları ve Mesafeli Satış Sözleşmesi</h3>
    <p style="color:#6666AA;font-size:12px;margin-bottom:12px;">6502 Sayılı Tüketicinin Korunması Hakkında Kanun kapsamında düzenlenmiştir.</p>
    <p style="margin-bottom:10px;padding:12px;background:rgba(45,212,191,.06);border:1px solid rgba(45,212,191,.2);border-radius:10px;font-size:12px;">
      <strong style="color:#2DD4BF;">Satıcı:</strong> Melih Keleş · MK Software (Şahıs İşletmesi)<br>
      Yenimahalle VD · VN: 5431084511 · Ankara, Yenimahalle<br>
      0312 820 10 13 · kelesmelih551@gmail.com · sofrim-web.vercel.app
    </p>
    <h4 style="color:var(--text);margin:16px 0 8px;">1. Hizmet</h4>
    <p>Sofrım bulut tabanlı restoran yönetim yazılımı. Aylık veya yıllık abonelik modeliyle dijital ortamda sunulmaktadır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">2. Fiyatlar (KDV Dahil)</h4>
    <p>Lite: 799₺/ay · Standart: 1.499₺/ay · Pro: 2.499₺/ay<br>Yıllık ödemede 2 ay ücretsiz. 14 gün ücretsiz deneme — kredi kartı gerekmez.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">3. Hesap ve Erişim</h4>
    <p>Platforma erişim yalnızca onaylanan başvurular aracılığıyla sağlanır. Kullanıcıya özel 6 haneli kod ve şifre ile giriş yapılır. Hesap bilgilerinin güvenliğinden kullanıcı sorumludur.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">4. Cayma Hakkı</h4>
    <p>Dijital hizmet niteliğinde olduğundan ve hizmet ifası başladığından cayma hakkı uygulanmamaktadır. 14 günlük ücretsiz deneme bu hakkın pratikte karşılığını oluşturmaktadır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">5. İptal</h4>
    <p>İstediğiniz zaman iptal edebilirsiniz. Mevcut dönem sonuna kadar erişim sürer. Yıllık abonelikte kullanılmayan tam aylara karşılık iade değerlendirmesi yapılır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">6. Kullanıcı Yükümlülükleri</h4>
    <p>Platform yalnızca yasal amaçlar için kullanılabilir. Sisteme zarar verebilecek eylemler yasaktır. Müşteri verilerinin KVKK kapsamında korunması kullanıcının sorumluluğundadır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">7. Fikri Mülkiyet</h4>
    <p>Platform'un yazılımı, tasarımı ve tüm içeriği Sofrım'a aittir. Kopyalanamaz, çoğaltılamaz.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">8. Uyuşmazlık</h4>
    <p>Türk hukukuna tabidir. Ankara Mahkemeleri yetkilidir.</p>
    <div style="height:40px;"></div>
  `,
  delivery: `
    <h3 style="color:var(--accent);margin-bottom:12px;">Teslimat ve İade Şartları</h3>
    <p style="margin-bottom:10px;padding:12px;background:rgba(45,212,191,.06);border:1px solid rgba(45,212,191,.2);border-radius:10px;font-size:12px;">
      <strong style="color:#2DD4BF;">Hizmet Sağlayıcı:</strong> Melih Keleş · MK Software<br>
      Yenimahalle VD · VN: 5431084511 · Ankara, Yenimahalle
    </p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Hizmetin Niteliği</h4>
    <p>Sofrım tamamen dijital bir yazılım hizmetidir. Fiziksel teslimat söz konusu değildir.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Erişim Teslimatı</h4>
    <p>Başvuru onayının ardından en geç <strong style="color:var(--text);">1 iş günü</strong> içinde giriş bilgileri yalnızca kayıtlı e-posta adresinize ve/veya WhatsApp numaranıza gönderilir.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Ücretsiz Deneme</h4>
    <p>Tüm paketler 14 günlük ücretsiz deneme ile başlar. Bu sürede ücret alınmaz, kredi kartı bilgisi istenmez. İptal durumunda herhangi bir yaptırım uygulanmaz.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">İptal Koşulları</h4>
    <p><strong style="color:var(--text);">Aylık abonelik:</strong> Bir sonraki dönemden en az 3 gün önce iptal talebinde bulunulmalıdır. Mevcut dönem sonuna kadar erişim sürer.<br><br>
    <strong style="color:var(--text);">Yıllık abonelik:</strong> Kullanılmayan tam aylara karşılık gelen tutar iade edilir. İptal talebi kelesmelih551@gmail.com adresine yazılı iletilmelidir.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">İade Koşulları</h4>
    <p>Dijital hizmet niteliğinden dolayı genel kural olarak iade yapılmamaktadır. Ancak ciddi teknik arızalar veya hizmetin sunulamaması durumunda iade değerlendirmesi yapılır. Talepler en geç 14 iş günü içinde sonuçlandırılır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">Hizmet Kesintileri</h4>
    <p>24 saati aşan kesintilerde abonelik süresi uzatılır veya orantılı ücret iadesi yapılır.</p>
    <h4 style="color:var(--text);margin:16px 0 8px;">İletişim</h4>
    <p>kelesmelih551@gmail.com · 0312 820 10 13 · WhatsApp: 0312 820 10 13</p>
    <div style="height:40px;"></div>
  `
};

// ─── CONSENT MODAL HTML ───────────────────────────────────────
function renderConsentModal() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="legal-modal-overlay" id="consent-modal">
      <div class="legal-modal">
        <div class="legal-modal-header">
          <div class="legal-modal-title" id="consent-modal-title"></div>
          <button class="legal-modal-close" onclick="closeConsentModal()">✕</button>
        </div>
        <div class="legal-modal-body" id="consent-modal-body"></div>
        <div class="legal-modal-footer">
          <div class="legal-modal-scroll-hint" id="consent-scroll-hint">⬇️ Metni aşağı kaydırın</div>
          <button class="legal-approve-btn disabled" id="consent-approve-btn" onclick="approveConsent()" disabled>⬇️ Lütfen metni okuyun</button>
        </div>
      </div>
    </div>
  `);
}

// ─── CONSENT CHECKBOXLARI HTML ────────────────────────────────
function renderConsentBoxes(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="consent-item" id="consent-kvkk">
      <div class="consent-check" id="check-kvkk"></div>
      <div class="consent-text">
        <span class="consent-link" onclick="openConsentModal('kvkk')">KVKK Aydınlatma Metni</span>'ni okudum, onaylıyorum.
        <span class="consent-required">*</span>
      </div>
    </div>
    <div class="consent-item" id="consent-privacy">
      <div class="consent-check" id="check-privacy"></div>
      <div class="consent-text">
        <span class="consent-link" onclick="openConsentModal('privacy')">Gizlilik Politikası</span>'nı okudum, kabul ediyorum.
        <span class="consent-required">*</span>
      </div>
    </div>
    <div class="consent-item" id="consent-terms">
      <div class="consent-check" id="check-terms"></div>
      <div class="consent-text">
        <span class="consent-link" onclick="openConsentModal('terms')">Kullanım Koşulları ve Mesafeli Satış Sözleşmesi</span>'ni okudum, kabul ediyorum.
        <span class="consent-required">*</span>
      </div>
    </div>
    <div class="consent-item" id="consent-delivery">
      <div class="consent-check" id="check-delivery"></div>
      <div class="consent-text">
        <span class="consent-link" onclick="openConsentModal('delivery')">Teslimat ve İade Şartları</span>'nı okudum, kabul ediyorum.
        <span class="consent-required">*</span>
      </div>
    </div>
    <p style="font-size:11px;color:var(--muted);margin-top:6px;">* Belgeye tıklayarak okuyunuz. En alta scroll ettikten sonra onaylayabilirsiniz.</p>
  `;
}

// ─── İL/İLÇE ─────────────────────────────────────────────────
const IL_ILCE = {
  'Ankara': ['Akyurt','Altındağ','Ayaş','Bala','Beypazarı','Çamlıdere','Çankaya','Çubuk','Elmadağ','Etimesgut','Evren','Gölbaşı','Güdül','Haymana','Kahramankazan','Keçiören','Kızılcahamam','Mamak','Nallıhan','Polatlı','Pursaklar','Sincan','Şereflikoçhisar','Yenimahalle'],
  'İstanbul': ['Adalar','Arnavutköy','Ataşehir','Avcılar','Bağcılar','Bahçelievler','Bakırköy','Başakşehir','Bayrampaşa','Beşiktaş','Beykoz','Beylikdüzü','Beyoğlu','Büyükçekmece','Çatalca','Çekmeköy','Esenler','Esenyurt','Eyüpsultan','Fatih','Gaziosmanpaşa','Güngören','Kadıköy','Kağıthane','Kartal','Küçükçekmece','Maltepe','Pendik','Sancaktepe','Sarıyer','Silivri','Sultanbeyli','Sultangazi','Şile','Şişli','Tuzla','Ümraniye','Üsküdar','Zeytinburnu'],
  'İzmir': ['Aliağa','Balçova','Bayındır','Bayraklı','Bergama','Bornova','Buca','Çeşme','Çiğli','Dikili','Foça','Gaziemir','Güzelbahçe','Karabağlar','Karaburun','Karşıyaka','Kemalpaşa','Konak','Menderes','Menemen','Narlıdere','Ödemiş','Selçuk','Seferihisar','Tire','Torbalı','Urla'],
  'Antalya': ['Akseki','Aksu','Alanya','Demre','Döşemealtı','Elmalı','Finike','Gazipaşa','Kaş','Kemer','Kepez','Konyaaltı','Korkuteli','Kumluca','Manavgat','Muratpaşa','Serik'],
  'Bursa': ['Büyükorhan','Gemlik','Gürsu','İnegöl','İznik','Karacabey','Mudanya','Mustafakemalpaşa','Nilüfer','Orhangazi','Osmangazi','Yenişehir','Yıldırım'],
  'Adana': ['Aladağ','Ceyhan','Çukurova','Karataş','Kozan','Pozantı','Sarıçam','Seyhan','Yüreğir'],
  'Gaziantep': ['Araban','İslahiye','Nizip','Oğuzeli','Şahinbey','Şehitkamil','Yavuzeli'],
  'Konya': ['Meram','Selçuklu','Karatay','Ereğli','Akşehir','Beyşehir','Seydişehir','Kulu','Cihanbeyli'],
  'Kocaeli': ['İzmit','Gebze','Körfez','Gölcük','Kartepe','Çayırova','Darıca','Başiskele','Karamürsel'],
  'Mersin': ['Akdeniz','Mezitli','Toroslar','Yenişehir','Tarsus','Erdemli','Silifke','Anamur','Mut'],
  'Diyarbakır': ['Bağlar','Bismil','Ergani','Kayapınar','Lice','Silvan','Sur','Yenişehir'],
  'Hatay': ['Antakya','Arsuz','Belen','Defne','Dörtyol','Erzin','İskenderun','Kırıkhan','Reyhanlı','Samandağ'],
  'Kayseri': ['Kocasinan','Melikgazi','Talas','Develi','Bünyan','İncesu'],
  'Samsun': ['İlkadım','Atakum','Canik','Tekkeköy','Bafra','Çarşamba','Terme','Havza'],
  'Trabzon': ['Ortahisar','Akçaabat','Of','Sürmene','Araklı','Vakfıkebir'],
  'Eskişehir': ['Odunpazarı','Tepebaşı','Sivrihisar','Çifteler','İnönü'],
  'Sakarya': ['Adapazarı','Serdivan','Erenler','Hendek','Sapanca','Karasu','Akyazı'],
  'Manisa': ['Şehzadeler','Yunusemre','Turgutlu','Akhisar','Salihli','Soma','Alaşehir'],
  'Denizli': ['Pamukkale','Merkezefendi','Çivril','Acıpayam','Buldan','Tavas'],
  'Balıkesir': ['Altıeylül','Karesi','Bandırma','Edremit','Ayvalık','Gönen','Burhaniye'],
};

function cityChanged(citySelectId, districtSelectId, taxSelectId) {
  const city = document.getElementById(citySelectId).value;
  const dSel = document.getElementById(districtSelectId);
  const tSel = document.getElementById(taxSelectId);
  dSel.innerHTML = '<option value="">İlçe seçin...</option>';
  if (tSel) tSel.innerHTML = '<option value="">Vergi dairesi seçin...</option>';
  if (!city) return;
  const ilceler = IL_ILCE[city] || [city + ' Merkez'];
  ilceler.forEach(i => {
    const o = document.createElement('option'); o.value = i; o.textContent = i; dSel.appendChild(o);
  });
  if (tSel) {
    const o = document.createElement('option'); o.value = city + ' VD'; o.textContent = city + ' Vergi Dairesi'; tSel.appendChild(o);
  }
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
  renderConsentModal();
  loadTenantCount();
});
