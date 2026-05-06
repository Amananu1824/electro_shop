// ====== PAGE NAVIGATION ======
// NOTE: data.js pehle load hona chahiye — previousPage variable wahan hai

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Navbar active state update
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Mobile menu close
  document.getElementById('navLinks').classList.remove('open');
}

function goBack() {
  showPage(previousPage);
}

// ====== PRODUCT DETAIL PAGE ======
function showDetail(id) {
  const p = products.find(x => x.id === id); // products → data.js se aayega

  previousPage = document.querySelector('.page.active').id.replace('page-', '');

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-img-box">${p.emoji}</div>
    <div class="detail-info">
      <div class="product-tag" style="display:inline-block;margin-bottom:1rem;">${p.tag || p.category}</div>
      <h1>${p.name}</h1>
      <div class="detail-rating">
        <span class="stars">★★★★★</span>
        <span class="rating-count">(4.5 / 5 — 238 reviews)</span>
      </div>
      <div class="detail-price">
        ₹${p.price.toLocaleString('en-IN')}
        <span class="old-price">₹${p.oldPrice.toLocaleString('en-IN')}</span>
      </div>
      <p class="detail-desc">${p.desc}</p>
      <h4 style="font-family:'Rajdhani',sans-serif;font-weight:700;color:var(--text);margin-bottom:.75rem;text-transform:uppercase;letter-spacing:1px;">Specifications</h4>
      <div class="spec-grid">
        ${p.specs.map(s => `
          <div class="spec-item">
            <div class="spec-label">${s.l}</div>
            <div class="spec-value">${s.v}</div>
          </div>`).join('')}
      </div>
      <div class="detail-btns">
        <button class="btn btn-whatsapp" onclick="openWhatsApp('Hello! I want to buy ${p.name} for ₹${p.price}')">
          💬 Buy on WhatsApp
        </button>
        <button class="btn btn-orange" onclick="showPage('contact')">📩 Enquiry</button>
      </div>
    </div>`;

  showPage('detail');
}