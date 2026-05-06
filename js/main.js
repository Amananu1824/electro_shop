// ====== WHATSAPP ======
function openWhatsApp(msg) {
  // WHATSAPP_NUMBER → data.js se aayega
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ====== RENDER PRODUCT CARD ======
function renderProductCard(p) {
  return `
    <div class="product-card" onclick="showDetail(${p.id})">
      <div class="product-img">
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
        ${p.emoji}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          ₹${p.price.toLocaleString('en-IN')}
          <span class="old">₹${p.oldPrice.toLocaleString('en-IN')}</span>
        </div>
        <button class="btn btn-primary"
          style="width:100%;justify-content:center;padding:10px;"
          onclick="event.stopPropagation();showDetail(${p.id})">
          View Details →
        </button>
      </div>
    </div>`;
}

// ====== INIT — PAGE LOAD PE RENDER ======
function initProducts() {
  // Featured grid (Home page — 6 products)
  document.getElementById('featuredGrid').innerHTML =
    products.slice(0, 6).map(p => renderProductCard(p)).join('');

  // All products grid (Products page)
  document.getElementById('allProductsGrid').innerHTML =
    products.map(p => renderProductCard(p)).join('');

  // Filter buttons
  const cats = ['All', ...new Set(products.map(p => p.category))];
  document.getElementById('filterBar').innerHTML = cats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? 'active' : ''}"
      onclick="filterProducts('${c}', this)">${c}</button>`
  ).join('');
}

// ====== FILTER ======
function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat === 'All' ? products : products.filter(p => p.category === cat);
  document.getElementById('allProductsGrid').innerHTML =
    filtered.map(p => renderProductCard(p)).join('');
}

// ====== CONTACT FORM ======
function sendMessage() {
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const msg = document.getElementById('cMsg').value.trim();

  if (!name || !phone || !msg) {
    showToast('❗ Sabhi fields fill karein!', '#ff6b35');
    return;
  }

  const waMsg = `New Enquiry from Website!\nName: ${name}\nPhone: ${phone}\nSubject: ${document.getElementById('cSubject').value}\nMessage: ${msg}`;
  openWhatsApp(waMsg);

  document.getElementById('successMsg').style.display = 'block';
  document.getElementById('cName').value = '';
  document.getElementById('cPhone').value = '';
  document.getElementById('cMsg').value = '';
}

// ====== TOAST ======
function showToast(msg, color = '#25d366') {
  const t = document.getElementById('toast');
  const tm = document.getElementById('toastMsg');
  t.style.borderColor = color + '66';
  t.style.color = color;
  tm.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ====== HAMBURGER MENU ======
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ====== SCROLL TO TOP ======
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  btn.classList.toggle('visible', window.scrollY > 400);
});

// ====== START ======
// DOM ready hone ke baad products render karo
document.addEventListener('DOMContentLoaded', initProducts);