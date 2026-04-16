// script.js - Full-Stack Application
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port !== '3000'
  ? 'http://localhost:3000/api'
  : '/api';

// ==================== I18N DICTIONARY ====================
const i18n = {
  en: {
    "nav.home": "Home", "nav.products": "Products", "nav.about": "About", "nav.soildetector": "Soil Detection", "nav.fertilizers": "Fertilizers", "nav.services": "Services", "nav.gallery": "Gallery", "nav.contact": "Contact", "nav.cart": "Cart",
    "soil.title": "AI Soil Detection & Analysis",
    "soil.desc": "Harnessing modern technology to analyze your farm's soil health in seconds. Get precise data on nutrients, pH, and moisture.",
    "soil.btn": "Start Scanning",
    "fertilizer.badge": "WHY ARE FERTILIZERS IMPORTANT?",
    "fertilizer.main": "Fertilizers play a vital role in improving soil fertility and ensuring healthy crop growth. They provide essential nutrients like Nitrogen, Phosphorus, and Potassium that help plants grow strong and increase crop yield.",
    "fertilizer.tagline": "Healthy Soil + Right Fertilizer = Better Yield",
    "hero.badge": "Smart Agriculture Solutions",
    "hero.title": "Empowering<br>Farmers with <span class=\"highlight\">Smart</span><br><span class=\"highlight\">Agriculture Solutions</span>",
    "hero.desc": "Shree Mangalmurti Krushi Seva Kendra provides quality fertilizers, pesticides, seeds, and expert farming guidance to help farmers increase productivity and crop health.",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> Explore Products →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> Get Crop Guidance",
    "product.buy": "<i class=\"fas fa-forward\"></i> Buy Now →",
    "product.feedback": "<i class=\"fas fa-star\"></i> Feedback",
    "filter.all": "All Products", "filter.fertilizers": "🌱 Fertilizers", "filter.insecticides": "🐛 Insecticides", "filter.fungicides": "🍄 Fungicides", "filter.herbicides": "🌿 Herbicides", "filter.seeds": "🌾 Seeds", "filter.growthboosters": "💪 Growth Boosters", "filter.organic": "☘️ Organic", "filter.cropprotection": "🛡️ Protection"
  },
  hi: {
    "nav.home": "होम", "nav.products": "उत्पाद", "nav.about": "हमारे बारे में", "nav.soildetector": "मिट्टी की जाँच", "nav.fertilizers": "उर्वरक", "nav.services": "सेवाएं", "nav.gallery": "गैलरी", "nav.contact": "संपर्क करें", "nav.cart": "कार्ट",
    "soil.title": "AI मिट्टी पहचान और विश्लेषण",
    "soil.desc": "सेकंडों में अपने खेत की मिट्टी के स्वास्थ्य का विश्लेषण करने के लिए आधुनिक तकनीक का लाभ उठाएं। पोषक तत्वों, पीएच और नमी पर सटीक डेटा प्राप्त करें।",
    "soil.btn": "स्कैनिंग शुरू करें",
    "fertilizer.badge": "उर्वरक क्यों महत्वपूर्ण हैं?",
    "fertilizer.main": "मिट्टी की उर्वरता बढ़ाने और स्वस्थ फसल विकास सुनिश्चित करने में उर्वरक महत्वपूर्ण भूमिका निभाते हैं। वे नाइट्रोजन, फास्फोरस और पोटेशियम जैसे आवश्यक पोषक तत्व प्रदान करते हैं जो पौधों को मजबूत बनाने और फसल की पैदावार बढ़ाने में मदद करते हैं।",
    "fertilizer.tagline": "स्वस्थ मिट्टी + सही उर्वरक = बेहतर पैदावार",
    "hero.badge": "स्मार्ट कृषि समाधान",
    "hero.title": "किसानों को <span class=\"highlight\">स्मार्ट कृषि</span><br><span class=\"highlight\">समाधानों</span> के साथ सशक्त बनाना",
    "hero.desc": "श्री मंगलमूर्ति कृषि सेवा केंद्र उत्पादकता और फसल स्वास्थ्य बढ़ाने के लिए गुणवत्तापूर्ण उर्वरक, कीटनाशक, बीज और विशेषज्ञ कृषि मार्गदर्शन प्रदान करता है।",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> उत्पाद देखें →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> फसल मार्गदर्शन प्राप्त करें",
    "product.buy": "<i class=\"fas fa-forward\"></i> अभी खरीदें →",
    "product.feedback": "<i class=\"fas fa-star\"></i> प्रतिक्रिया",
    "filter.all": "सभी उत्पाद", "filter.fertilizers": "🌱 उर्वरक", "filter.insecticides": "🐛 कीटनाशक", "filter.fungicides": "🍄 फफूंदनाशक", "filter.herbicides": "🌿 शाकनाशी", "filter.seeds": "🌾 बीज", "filter.growthboosters": "💪 विकास वर्धक", "filter.organic": "☘️ जैविक", "filter.cropprotection": "🛡️ सुरक्षा"
  },
  mr: {
    "nav.home": "मुखपृष्ठ", "nav.products": "उत्पादने", "nav.about": "आमच्याबद्दल", "nav.soildetector": "माती परीक्षण", "nav.fertilizers": "खते", "nav.services": "सेवा", "nav.gallery": "गॅलरी", "nav.contact": "संपर्क", "nav.cart": "कार्ट",
    "soil.title": "AI माती ओळख आणि विश्लेषण",
    "soil.desc": " सेकंदात तुमच्या शेतातील मातीचे आरोग्य तपासण्यासाठी आधुनिक तंत्रज्ञानाचा वापर करा. पोषक घटक, पीएच आणि ओलावा यावर अचूक माहिती मिळवा.",
    "soil.btn": "स्कॅनिंग सुरू करा",
    "fertilizer.badge": "खते का महत्त्वाची आहेत?",
    "fertilizer.main": "मातीची सुपीकता सुधारण्यात आणि पिकांची निरोगी वाढ सुनिश्चित करण्यात खते महत्त्वाची भूमिका बजावतात. ते नत्र, स्फुरद आणि पालाश यांसारखी आवश्यक पोषक तत्वे पुरवतात ज्यामुळे झाडे मजबूत होतात आणि पिकांच्या उत्पादनात वाढ होते.",
    "fertilizer.tagline": "आरोग्यदायी माती + योग्य खते = उत्तम उत्पन्न",
    "hero.badge": "स्मार्ट कृषी उपाय",
    "hero.title": "<span class=\"highlight\">स्मार्ट कृषी</span><br><span class=\"highlight\"> उपायांसह</span><br>शेतकऱ्यांचे सक्षमीकरण",
    "hero.desc": "श्री मंगलमूर्ती कृषी सेवा केंद्र उत्पादकता आणि पिकांचे आरोग्य वाढवण्यासाठी दर्जेदार खते, रसायने, बियाणे आणि तज्ञांचे मार्गदर्शन पुरवते.",
    "hero.btnProducts": "<i class=\"fas fa-store\"></i> उत्पादने पहा →",
    "hero.btnGuidance": "<i class=\"fas fa-leaf\"></i> पीक मार्गदर्शन मिळवा",
    "product.buy": "<i class=\"fas fa-forward\"></i> आता खरेदी करा →",
    "product.feedback": "<i class=\"fas fa-star\"></i> अभिप्राय",
    "filter.all": "सर्व उत्पादने", "filter.fertilizers": "🌱 खते", "filter.insecticides": "🐛 कीटकनाशके", "filter.fungicides": "🍄 बुरशीनाशके", "filter.herbicides": "🌿 तणनाशके", "filter.seeds": "🌾 बियाणे", "filter.growthboosters": "💪 वाढ वर्धक", "filter.organic": "☘️ सेंद्रिय", "filter.cropprotection": "🛡️ संरक्षण"
  }
};

function updateLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
}

// ==================== STATE ====================
let currentLanguage = "en";
let activeFilter = "all";
let searchTerm = "";
let sortBy = "default";
let cart = JSON.parse(localStorage.getItem('smk_cart') || '[]');
let products = [];
let currentDetailProduct = null;
const galleryData = [
  { title: "Premium Wheat Harvest", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop" },
  { title: "Healthy Vegetable Production", image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop" },
  { title: "Sustainable Farming Practices", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" },
  { title: "Precision Crop Protection", image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop" },
  { title: "Nutrient-Rich Soil Management", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop" },
  { title: "Advanced Pest Management", image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?q=80&w=800&auto=format&fit=crop" }
];

// Helper for API calls
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('smk_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  };

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'API Error');
    return { ok: true, data };
  } catch (error) {
    let msg = error.message;
    if (msg === 'Failed to fetch' || msg.includes('Failed to fetch')) {
      msg = 'Cannot connect to server. Please ensure the backend server is running.';
    }
    return { ok: false, msg };
  }
}

// User helper
function getCurrentUser() {
  const user = localStorage.getItem('smk_user');
  return user ? JSON.parse(user) : null;
}

// ==================== AUTH SYSTEM ====================
function updateAuthUI() {
  const user = getCurrentUser();
  const authButtons = document.getElementById('authButtons');
  const userInfo = document.getElementById('userInfo');
  const authGate = document.getElementById('authGate');
  const adminBtn = document.getElementById('adminPanelBtn');
  const trackingBtn = document.getElementById('trackingBtn');

  if (user) {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    document.getElementById('userNameDisplay').textContent = '👤 ' + user.name;
    authGate.classList.add('hidden');
    document.body.classList.remove('auth-locked');
    // Show/Hide Admin specific buttons
    adminBtn.style.display = user.role === 'admin' ? 'inline-block' : 'none';
    const userDashBtn = document.getElementById('userDashboardBtn');
    if (userDashBtn) userDashBtn.style.display = user.role === 'user' ? 'inline-block' : 'none';

    // Hide Cart button globally if admin
    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) shopNowBtn.style.display = user.role === 'admin' ? 'none' : 'inline-block';

    const adminLink = document.getElementById('adminMenuLink');
    if (adminLink) adminLink.style.display = user.role === 'admin' ? 'inline-block' : 'none';
    trackingBtn.style.display = user.role === 'admin' ? 'none' : 'inline-block';

    // Show all Admin Tabs for Admin Role
    const adminOrdersBtn = document.getElementById('adminOrdersTabBtn');
    const adminUsersBtn = document.getElementById('adminUsersTabBtn');
    const adminAnalyticsBtn = document.getElementById('adminAnalyticsTabBtn');
    if (adminOrdersBtn) adminOrdersBtn.classList.remove('restricted');
    if (adminUsersBtn) adminUsersBtn.classList.remove('restricted');
    if (adminAnalyticsBtn) adminAnalyticsBtn.classList.remove('restricted');

    // AUTO-OPEN DASHBOARDS (New Requirement)
    if (!window.sessionDashboardOpened) {
      if (user.role === 'admin') {
        renderAdminProducts(); renderAdminOrders(); renderAdminUsers(); renderAdminAnalytics();
        openModal('adminPanel');
      } else {
        renderUserDashboard();
        openModal('userPanel');
      }
      window.sessionDashboardOpened = true;
    }
  } else {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
    authGate.classList.remove('hidden');
    document.body.classList.add('auth-locked');
    adminBtn.style.display = 'none';
    window.sessionDashboardOpened = false; // Reset for next login

    const shopNowBtn = document.getElementById('shopNowBtn');
    if (shopNowBtn) shopNowBtn.style.display = 'inline-block';

    const adminLink = document.getElementById('adminMenuLink');
    if (adminLink) adminLink.style.display = 'none';
    trackingBtn.style.display = 'none';
    closeAllModals();
  }
  updateCartCount();
}

function logoutUser() {
  localStorage.removeItem('smk_token');
  localStorage.removeItem('smk_user');
  cart = [];
  saveCart();
  updateAuthUI();
  showToast('👋 Logged out successfully!');
}

// ==================== MODAL SYSTEM ====================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
}
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  document.body.style.overflow = '';
}

// ==================== CART SYSTEM ====================
function saveCart() { localStorage.setItem('smk_cart', JSON.stringify(cart)); }

function addToCart(productId) {
  if (!getCurrentUser()) { showToast('⚠️ Please login to add items to cart!'); openModal('loginModal'); return; }
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image_url: product.image_url,
      size: product.size,
      qty: 1
    });
  }
  saveCart();
  updateCartCount();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart(); updateCartCount(); renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart(); updateCartCount(); renderCart();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
}

function getCartTotal() { return cart.reduce((sum, item) => sum + (item.price * item.qty), 0); }

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
    totalEl.textContent = '';
    checkoutBtn.style.display = 'none';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <img src="${item.image_url}?t=${Date.now()}" class="admin-product-img" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
        <div class="cart-item-details">
          <strong>${item.name}</strong>
          <span>₹${item.price.toLocaleString()} × ${item.qty} ${item.size ? `• ${item.size}` : ''}</span>
        </div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
  totalEl.innerHTML = `<strong>Total: ₹${getCartTotal().toLocaleString()}</strong>`;
  checkoutBtn.style.display = 'block';
}

// ==================== LOAD & RENDER DATA ====================
async function loadProducts() {
  let url = '/products';
  const query = new URLSearchParams();
  if (activeFilter !== 'all') query.append('category', activeFilter);
  if (searchTerm) query.append('search', searchTerm);

  if (query.toString()) url += `?${query.toString()}`;

  const res = await apiCall(url);
  if (res.ok) {
    products = res.data;

    // Client side sorting
    if (sortBy === "price-low") products.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") products.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") products.sort((a, b) => a.name.localeCompare(b.name));

    renderProductsUI();
  } else {
    document.getElementById("productGrid").innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">❌ Error loading products. Server might be down.</div>';
  }
}

function renderProductsUI() {
  document.getElementById("productCount").innerText = `${products.length} products found`;
  const grid = document.getElementById("productGrid");
  if (products.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">🌱 No products found.</div>';
    return;
  }

  const user = getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  const displayButtons = isAdmin ? 'none' : 'inline-block';

  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-img"><img src="${product.image_url}?t=${Date.now()}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'"></div>
      <div class="product-title">${product.name}</div>
      <div class="product-category">${product.category} ${product.size ? `<span style="background:#eef6ee; color:#2b5e2f; padding:2px 6px; border-radius:4px; font-weight:bold; font-size:0.75rem; margin-left:6px;"><i class="fas fa-weight-hanging"></i> ${product.size}</span>` : ''}</div>
      <div class="product-desc">${product.description.substring(0, 80)}...</div>
      <div class="price">₹${Number(product.price).toLocaleString()}</div>
      <button class="buy-btn" onclick="openProductDetail(${product.id})" style="margin-bottom:8px; display: ${displayButtons};" data-i18n="product.buy"><i class="fas fa-forward"></i> Buy Now →</button>
      <button class="feedback-btn" onclick="openFeedback(${product.id})" style="display: ${displayButtons};" data-i18n="product.feedback"><i class="fas fa-star"></i> Feedback</button>
    </div>
  `).join("");
  updateLanguage(currentLanguage);
}

function openProductDetail(id) {
  currentDetailProduct = products.find(p => p.id === id);
  if (!currentDetailProduct) return;

  document.getElementById('detailImage').src = `${currentDetailProduct.image_url}?t=${Date.now()}`;
  document.getElementById('detailName').textContent = currentDetailProduct.name;
  document.getElementById('detailPrice').textContent = `₹${Number(currentDetailProduct.price).toLocaleString()}`;
  document.getElementById('detailOldPrice').textContent = Math.round(currentDetailProduct.price * 1.22); // mock old price
  document.getElementById('detailDesc').textContent = currentDetailProduct.description;

  document.getElementById('detailAddToCartBtn').onclick = () => {
    addToCart(id);
  };

  document.getElementById('detailBuyNowBtn').onclick = () => {
    if (!getCurrentUser()) { showToast('⚠️ Please login to purchase!'); closeModal('productDetailModal'); openModal('loginModal'); return; }
    addToCart(id);
    closeModal('productDetailModal');
    processCheckout();
  };

  const user = getCurrentUser();
  const isAdmin = user && user.role === 'admin';
  document.getElementById('detailAddToCartBtn').style.display = isAdmin ? 'none' : 'flex';
  document.getElementById('detailBuyNowBtn').style.display = isAdmin ? 'none' : 'flex';

  openModal('productDetailModal');
}

function renderGallery() {
  document.getElementById('galleryGrid').innerHTML = galleryData.map(item => `
    <div class="gallery-item">
      <img class="gallery-img" src="${item.image}" alt="${item.title}" onerror="this.style.background='linear-gradient(135deg,#2b5e2f,#1e4521)'">
      <div class="gallery-overlay"><p>${item.title}</p></div>
    </div>
  `).join('');
}

// ==================== ADMIN PANEL ====================
function renderAdminProducts() {
  const list = document.getElementById('adminProductsList');
  if (!products || products.length === 0) {
    list.innerHTML = '<p style="color:#999; padding:20px; text-align:center;">No products found. Add one above.</p>';
    return;
  }
  list.innerHTML = products.map(p => `
    <div class="admin-product-item">
      <div class="admin-product-info">
        <div class="admin-product-name"><i class="fas fa-box-open" style="color:#2b5e2f; margin-right:6px;"></i><strong>${p.name}</strong></div>
        <div class="admin-product-meta">${p.category} ${p.size ? `• <b>${p.size}</b>` : ''}</div>
      </div>
      <div class="admin-product-price-edit">
        <div style="display:flex; flex-direction:column; gap:4px;">
          <label style="font-size:0.75rem; color:#666; font-weight:600;">Price (₹)</label>
          <input
            type="number"
            id="priceInput_${p.id}"
            value="${p.price}"
            min="1"
            style="width:90px; padding:6px 10px; border:1px solid #cfdec5; border-radius:20px; font-size:0.85rem; font-weight:700; color:#1a2e1c;"
          />
        </div>
        <div style="display:flex; flex-direction:column; gap:4px;">
          <label style="font-size:0.75rem; color:#666; font-weight:600;">Size</label>
          <input
            type="text"
            id="sizeInput_${p.id}"
            value="${p.size || ''}"
            placeholder="e.g. 1L"
            style="width:90px; padding:6px 10px; border:1px solid #cfdec5; border-radius:20px; font-size:0.85rem; font-weight:700; color:#1a2e1c;"
          />
        </div>
        <button class="update-price-btn" onclick="updateProduct(${p.id})" style="margin-top:18px;">
          <i class="fas fa-check"></i> Save
        </button>
      </div>
      <button class="delete-btn" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i> Delete</button>
    </div>
  `).join('');
}

async function updateProduct(id) {
  const priceInput = document.getElementById(`priceInput_${id}`);
  const sizeInput = document.getElementById(`sizeInput_${id}`);
  const newPrice = parseInt(priceInput.value);
  const newSize = sizeInput.value;

  if (!newPrice || newPrice < 1) { showToast('⚠️ Please enter a valid price!'); return; }

  const res = await apiCall(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      price: newPrice,
      size: newSize
    })
  });

  if (res.ok) {
    showToast('✅ Product updated successfully!');
    await loadProducts();           
    setTimeout(renderAdminProducts, 400); 
  } else {
    showToast('❌ Error: ' + res.msg);
  }
}

async function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  const res = await apiCall(`/products/${id}`, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ Product deleted!');
    loadProducts();
    setTimeout(renderAdminProducts, 500);
  } else {
    showToast('❌ ' + res.msg);
  }
}

async function renderAdminOrders() {
  const list = document.getElementById('ordersList');
  const countBadge = document.getElementById('ordersCountBadge');
  list.innerHTML = '<tr><td colspan="7" style="text-align:center;">Loading...</td></tr>';
  const res = await apiCall('/orders');
  if (!res.ok) { list.innerHTML = `<tr><td colspan="7" style="color:red;text-align:center;">Error: ${res.msg}</td></tr>`; return; }

  const orders = res.data;
  if (countBadge) countBadge.textContent = `${orders.length} orders`;

  if (orders.length === 0) { list.innerHTML = '<tr><td colspan="7" style="color:#999;text-align:center;padding:20px;">No orders yet.</td></tr>'; return; }

  list.innerHTML = orders.map(o => {
    const d = new Date(o.created_at);
    const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `
      <tr>
        <td><strong>#${o.id}</strong></td>
        <td>
          <div style="font-weight:600;">${o.customer_name}</div>
          <div style="font-size:0.8rem; color:#666;">${o.phone}</div>
        </td>
        <td>
          <div style="display:flex; flex-direction:column; gap:4px; max-height:120px; overflow-y:auto;">
            ${o.items.map(i => `
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <img src="${i.image_url}" class="mini-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
                <span style="font-size:0.85rem;">${i.name} ${i.size ? `(${i.size})` : ''} <b>×${i.quantity}</b></span>
              </div>
            `).join('')}
          </div>
        </td>
        <td style="font-weight:bold;">₹${Number(o.total).toLocaleString()}</td>
        <td style="text-align:center;">
          <span class="pay-method-badge">${o.payment_method}</span>
          ${o.payment_proof ? `<br><a href="${o.payment_proof}" target="_blank" style="display:inline-block; margin-top:5px; font-size:0.75rem; padding:4px 8px; background:#eef6ee; color:#2b5e2f; border:1px solid #2b5e2f; border-radius:4px; text-decoration:none;"><i class="fas fa-image"></i> View Receipt</a>` : ''}
        </td>
        <td>${dateStr}</td>
        <td>
          <select class="status-select status-${o.status.toLowerCase()}" onchange="updateOrderStatus(${o.id}, this.value)">
            <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
            <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
          </select>
        </td>
      </tr>
    `;
  }).join('');
}

async function updateOrderStatus(id, status) {
  const res = await apiCall(`/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
  if (res.ok) showToast('✅ Status updated to ' + status);
  else showToast('❌ Error: ' + res.msg);
}

async function renderAdminUsers() {
  const list = document.getElementById('usersList');
  const countBadge = document.getElementById('usersCountBadge');
  list.innerHTML = '<tr><td colspan="5" style="text-align:center;">Loading...</td></tr>';
  const res = await apiCall('/users');
  if (!res.ok) { list.innerHTML = `<tr><td colspan="5" style="color:red;text-align:center;">Error: ${res.msg}</td></tr>`; return; }

  const users = res.data;
  if (countBadge) countBadge.textContent = `${users.length} users`;

  if (users.length === 0) { list.innerHTML = '<tr><td colspan="5" style="color:#999;text-align:center;padding:20px;">No users yet.</td></tr>'; return; }

  list.innerHTML = users.map(u => {
    const badgeClass = u.role === 'admin' ? 'role-admin' : 'role-user';
    const d = new Date(u.created_at);
    const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `
      <tr>
        <td><strong>#${u.id}</strong></td>
        <td><div style="font-weight:600; color:#1a2e1c;">${u.name}</div></td>
        <td>${u.email}</td>
        <td><span class="role-badge ${badgeClass}"><i class="${u.role === 'admin' ? 'fas fa-crown' : 'fas fa-user'}"></i> ${u.role}</span></td>
        <td>${dateStr}</td>
      </tr>
    `;
  }).join('');
}

// ==================== ADMIN ANALYTICS ====================
let salesChartInstance = null;
let categoryChartInstance = null;
let ordersTimeChartInstance = null;

async function renderAdminAnalytics() {
  const [ordersRes, usersRes] = await Promise.all([
    apiCall('/orders'),
    apiCall('/users')
  ]);

  if (!ordersRes.ok || !usersRes.ok) return;
  const orders = ordersRes.data;
  const users = usersRes.data;

  // 1. KPI Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total), 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length; // From global state

  document.getElementById('kpiRevenue').textContent = `₹${totalRevenue.toLocaleString()}`;
  document.getElementById('kpiOrders').textContent = totalOrders;
  document.getElementById('kpiUsers').textContent = totalUsers;
  document.getElementById('kpiProducts').textContent = totalProducts;

  // 2. Compute Analytics Data
  const productSalesMap = {};
  const categorySalesMap = {};
  const ordersByDateMap = {};

  orders.forEach(order => {
    // Orders over time
    const dateStr = new Date(order.created_at).toLocaleDateString();
    ordersByDateMap[dateStr] = (ordersByDateMap[dateStr] || 0) + 1;

    // Product and Category sales
    order.items.forEach(item => {
      productSalesMap[item.name] = (productSalesMap[item.name] || 0) + item.quantity;

      // Determine category (fallback if missing)
      const prod = products.find(p => p.id === item.product_id || p.name === item.name);
      const cat = prod ? prod.category : 'Other';
      categorySalesMap[cat] = (categorySalesMap[cat] || 0) + (item.quantity * Number(item.price));
    });
  });

  // Reusable Chart Destroy
  if (salesChartInstance) salesChartInstance.destroy();
  if (categoryChartInstance) categoryChartInstance.destroy();
  if (ordersTimeChartInstance) ordersTimeChartInstance.destroy();

  // Chart 1: Top Selling Products (Bar)
  const topProducts = Object.entries(productSalesMap).sort((a, b) => b[1] - a[1]).slice(0, 7);
  salesChartInstance = new Chart(document.getElementById('salesChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: topProducts.map(i => i[0]),
      datasets: [{
        label: 'Units Sold',
        data: topProducts.map(i => i[1]),
        backgroundColor: '#2b7a2b',
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });

  // Chart 2: Revenue by Category (Doughnut)
  // Use professional color palette
  const catColors = ['#2b7a2b', '#e68a2e', '#007bff', '#6f42c1', '#17a2b8', '#dc3545'];
  categoryChartInstance = new Chart(document.getElementById('categoryChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(categorySalesMap),
      datasets: [{
        data: Object.values(categorySalesMap),
        backgroundColor: catColors,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' }
      }
    }
  });

  // Chart 3: Orders over time (Line)
  ordersTimeChartInstance = new Chart(document.getElementById('ordersTimeChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: Object.keys(ordersByDateMap),
      datasets: [{
        label: 'Number of Orders',
        data: Object.values(ordersByDateMap),
        borderColor: '#e68a2e',
        backgroundColor: 'rgba(230, 138, 46, 0.2)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });
}

// ==================== ADMIN UPI SCANNERS ====================
async function renderAdminUPIs() {
  const list = document.getElementById('adminUPIList');
  if (!list) return;
  list.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">Loading UPI Scanners...</p>';
  const res = await apiCall('/upi');
  if (!res.ok) { list.innerHTML = `<p style="color:red; text-align:center;">Error: ${res.msg}</p>`; return; }

  const upis = res.data;
  if (upis.length === 0) { list.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">No UPI Scanners found. Add one above.</p>'; return; }

  list.innerHTML = upis.map(u => `
    <div class="admin-upi-card" style="border: 1px solid #eee; border-radius: 8px; padding: 15px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="${u.image_url}" alt="${u.name}" style="width: 50px; height: 50px; object-fit: contain; border: 1px solid #ddd; border-radius: 4px;" onerror="this.src='https://via.placeholder.com/50'">
        <div>
          <div style="font-weight: bold; color: #333;">${u.name}</div>
          <div style="font-size: 0.85rem; color: #666;">ID: ${u.upi_id}</div>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteUPIScanner(${u.id})" style="background: transparent; color: #dc3545; border: 1px solid #dc3545; padding: 5px 10px; border-radius: 4px; cursor: pointer;"><i class="fas fa-trash"></i> Delete</button>
    </div>
  `).join('');
}

async function deleteUPIScanner(id) {
  if (!confirm('Are you sure you want to delete this UPI scanner?')) return;
  const res = await apiCall('/upi/' + id, { method: 'DELETE' });
  if (res.ok) {
    showToast('🗑️ UPI Scanner deleted!');
    renderAdminUPIs();
  } else {
    showToast('❌ Error: ' + res.msg);
  }
}

// ==================== USER DASHBOARD ====================
async function renderUserDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const nameEl = document.getElementById('userDashName');
  if (nameEl) nameEl.textContent = user.name;

  const listEl = document.getElementById('dashRecentOrdersList');
  if (!listEl) return;

  listEl.innerHTML = '<p style="text-align:center; padding:20px;">Loading your activity...</p>';

  const res = await apiCall('/orders');
  if (!res.ok) {
    listEl.innerHTML = '<p style="text-align:center; color:red; padding:20px;">Could not load recent activity.</p>';
    return;
  }

  const orders = res.data.slice(0, 3);

  if (orders.length === 0) {
    listEl.innerHTML = '<p style="text-align:center; color:#999; padding:20px;">No recent orders found. Start your journey today!</p>';
    return;
  }

  listEl.innerHTML = orders.map(o => `
    <div class="order-item" style="margin-bottom:8px; border-left:4px solid ${o.status === 'Delivered' ? '#2b7a2b' : '#e68a2e'};">
      <div style="flex:1;">
        <div style="font-weight:600; font-size:0.85rem;">Order #${o.id}</div>
        <div style="font-size:0.75rem; color:#666;">${new Date(o.created_at).toLocaleDateString()} • ₹${Number(o.total).toLocaleString()}</div>
      </div>
      <div style="text-align:right;">
        <span class="status-badge status-${o.status}" style="font-size:0.7rem; padding:2px 8px;">${o.status}</span>
      </div>
    </div>
  `).join('');
}

// ==================== USER TRACKING ====================
async function renderUserOrders() {
  const list = document.getElementById('userOrdersList');
  list.innerHTML = 'Loading...';
  const res = await apiCall('/orders');
  if (!res.ok) { list.innerHTML = `<p style="color:red;">Error: ${res.msg}</p>`; return; }

  const orders = res.data;
  if (orders.length === 0) { list.innerHTML = '<p style="color:#999;padding:20px;">You have no orders yet.</p>'; return; }

  list.innerHTML = orders.map(o => `
    <div class="order-item">
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
          <strong>Order #${o.id} — ₹${Number(o.total).toLocaleString()}</strong>
          <span class="status-badge status-${o.status}">${o.status}</span>
        </div>
        <div class="order-items-detail">
          ${o.items.map(i => `
            <div class="order-item-row">
              <img src="${i.image_url}" class="order-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
              <div>
                <div style="font-weight:600; font-size:0.9rem;">${i.name}</div>
                <div style="font-size:0.8rem; color:#666;">${i.quantity} × ₹${Number(i.price).toLocaleString()} ${i.size ? `• ${i.size}` : ''}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="text-align:right;">
        <small>Date: ${new Date(o.created_at).toLocaleDateString()}</small><br>
        <small style="color:#e68a2e;">Est. Delivery: ${o.estimated_days} Days</small>
      </div>
    </div>
  `).join('');
}

// ==================== TOAST ====================
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==================== CHECKOUT ====================
function processCheckout() {
  closeModal('cartModal');
  const user = getCurrentUser();
  const form = document.getElementById('checkoutForm');
  if (user) {
    document.getElementById('checkoutName').value = user.name;
  }
  document.getElementById('checkoutSummary').innerHTML = `
    <div class="checkout-items">${cart.map(i => `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <img src="${i.image_url}" class="mini-thumb" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'">
        <div>
          <div style="font-weight:600;">${i.name}</div>
          <div style="font-size:0.8rem; color:#666;">${i.qty} × ₹${i.price.toLocaleString()} ${i.size ? `• ${i.size}` : ''}</div>
        </div>
        <div style="margin-left:auto; font-weight:700;">₹${(i.price * i.qty).toLocaleString()}</div>
      </div>
    `).join('')}</div>
    <div class="checkout-total"><strong>Total: ₹${getCartTotal().toLocaleString()}</strong></div>
  `;
  openModal('checkoutModal');
}

async function placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, paymentProofB64 = null) {
  const fullAddress = `${address}, ${city}, ${district}`;
  const payload = {
    customer_name: name,
    phone, phoneAlt, address: fullAddress, pincode, payment_method: payment,
    payment_proof_b64: paymentProofB64,
    cart_items: cart,
    total: getCartTotal()
  };

  const res = await apiCall('/orders', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    cart = [];
    saveCart();
    updateCartCount();
    closeModal('checkoutModal');
    document.getElementById('orderIdDisplay').textContent = 'Order ID: #' + res.data.orderId;
    document.getElementById('estimatedDeliveryMsg').textContent = `🚚 Estimated Delivery time: ${res.data.estimated_days} Days`;
    openModal('orderSuccessModal');
  } else {
    showToast('❌ Checkout Error: ' + res.msg);
  }
}

// ==================== FEEDBACK ====================
function openFeedback(productId) {
  if (!getCurrentUser()) { showToast('⚠️ Please login first!'); openModal('loginModal'); return; }
  document.getElementById('feedbackTargetId').value = productId;
  document.getElementById('feedbackForm').reset();
  document.querySelectorAll('#ratingStars i').forEach(star => star.classList.add('active'));
  document.getElementById('feedbackRating').value = 5;
  openModal('feedbackModal');
}

// ==================== INIT ====================
function init() {
  updateAuthUI();
  loadProducts();
  renderGallery();

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const rightControls = document.getElementById('rightControls');
  if (mobileMenuBtn && navLinks && rightControls) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      rightControls.classList.toggle('show');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 991) {
          navLinks.classList.remove('show');
          rightControls.classList.remove('show');
        }
      });
    });
  }

  // Auth gate buttons
  document.getElementById('gateLoginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('gateRegisterBtn').addEventListener('click', () => openModal('registerModal'));

  // Header auth buttons
  document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));
  document.getElementById('logoutBtn').addEventListener('click', logoutUser);

  document.getElementById('trackingBtn').addEventListener('click', () => {
    renderUserOrders(); openModal('trackingModal');
  });

  const adminOpenHandler = () => {
    renderAdminProducts(); renderAdminOrders(); renderAdminUsers(); renderAdminAnalytics(); renderAdminUPIs(); openModal('adminPanel');
  };
  document.getElementById('adminPanelBtn').addEventListener('click', adminOpenHandler);
  const userDashBtn = document.getElementById('userDashboardBtn');
  if (userDashBtn) userDashBtn.addEventListener('click', () => { renderUserDashboard(); openModal('userPanel'); });
  const adminLinkEl = document.getElementById('adminMenuLink');
  if (adminLinkEl) adminLinkEl.addEventListener('click', (e) => { e.preventDefault(); adminOpenHandler(); });

  // User Dashboard Handlers
  document.getElementById('dashViewOrders').addEventListener('click', () => {
    closeModal('userPanel'); renderUserOrders(); openModal('trackingModal');
  });
  document.getElementById('dashSeeAllOrders').addEventListener('click', () => {
    closeModal('userPanel'); renderUserOrders(); openModal('trackingModal');
  });
  document.getElementById('dashStartShopping').addEventListener('click', () => {
    closeModal('userPanel');
    const productsSec = document.getElementById('products');
    if (productsSec) productsSec.scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('dashGetGuidance').addEventListener('click', () => {
    closeModal('userPanel');
    const aboutSec = document.getElementById('about');
    if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
    showToast('🌿 Expert crop guidance available!');
  });
  document.getElementById('dashLogoutBtn').addEventListener('click', logoutUser);

  // Switch login <-> register
  document.getElementById('switchToRegister').addEventListener('click', (e) => { e.preventDefault(); closeModal('loginModal'); openModal('registerModal'); });
  document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); closeModal('registerModal'); openModal('loginModal'); });

  // Forgot password
  document.getElementById('showForgotPassword').addEventListener('click', (e) => {
    e.preventDefault(); closeModal('loginModal'); openModal('forgotPasswordModal');
  });
  document.getElementById('backToLoginFromForgot').addEventListener('click', (e) => {
    e.preventDefault(); closeModal('forgotPasswordModal'); openModal('loginModal');
  });

  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-modal')));
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal.id); });
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllModals(); });

  // Login form
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('loginError');
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    const res = await apiCall('/auth/login', {
      method: 'POST', body: JSON.stringify({ email, password: pass })
    });

    if (res.ok) {
      errEl.style.display = 'none';
      localStorage.setItem('smk_token', res.data.token);
      localStorage.setItem('smk_user', JSON.stringify(res.data.user));
      closeModal('loginModal');
      updateAuthUI();
      showToast('🎉 Welcome back, ' + res.data.user.name + '!');
      document.getElementById('loginForm').reset();
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Register form
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('registerError');
    const successEl = document.getElementById('registerSuccess');
    const payload = {
      name: document.getElementById('regName').value,
      email: document.getElementById('regEmail').value,
      password: document.getElementById('regPassword').value,
      role: document.getElementById('regRole').value
    };

    const res = await apiCall('/auth/register', { method: 'POST', body: JSON.stringify(payload) });

    if (res.ok) {
      errEl.style.display = 'none';
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      document.getElementById('registerForm').reset();
      setTimeout(() => { successEl.style.display = 'none'; closeModal('registerModal'); openModal('loginModal'); }, 1500);
    } else {
      successEl.style.display = 'none';
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Forgot Password Form Add
  document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('forgotError');
    const successEl = document.getElementById('forgotSuccess');
    const email = document.getElementById('forgotEmail').value;

    errEl.style.display = 'none'; successEl.style.display = 'none';
    showToast('⏳ Sending OTP to your email...');

    const res = await apiCall('/auth/forgot-password', {
      method: 'POST', body: JSON.stringify({ email })
    });

    if (res.ok) {
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      setTimeout(() => {
        document.getElementById('resetEmailHidden').value = email;
        closeModal('forgotPasswordModal');
        openModal('resetPasswordModal');
        document.getElementById('forgotPasswordForm').reset();
        successEl.style.display = 'none';
      }, 1500);
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Reset Password Form
  document.getElementById('resetPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = document.getElementById('resetError');
    const successEl = document.getElementById('resetSuccess');

    const email = document.getElementById('resetEmailHidden').value;
    const otp = document.getElementById('resetOtp').value;
    const newPassword = document.getElementById('resetNewPassword').value;

    errEl.style.display = 'none'; successEl.style.display = 'none';

    const res = await apiCall('/auth/reset-password', {
      method: 'POST', body: JSON.stringify({ email, otp, newPassword })
    });

    if (res.ok) {
      successEl.textContent = res.data.message; successEl.style.display = 'block';
      setTimeout(() => {
        closeModal('resetPasswordModal');
        openModal('loginModal');
        document.getElementById('resetPasswordForm').reset();
        successEl.style.display = 'none';
      }, 2000);
    } else {
      errEl.textContent = res.msg; errEl.style.display = 'block';
    }
  });

  // Cart button
  document.getElementById('shopNowBtn').addEventListener('click', () => {
    if (!getCurrentUser()) { showToast('⚠️ Please login first!'); openModal('loginModal'); return; }
    renderCart(); openModal('cartModal');
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', processCheckout);
  
  // Payment Method change -> show UPI section
  document.getElementById('paymentMethod').addEventListener('change', async (e) => {
    const upiSection = document.getElementById('upiPaymentSection');
    const screenshotInput = document.getElementById('upiScreenshot');
    if (e.target.value === 'upi') {
      upiSection.style.display = 'block';
      screenshotInput.required = true;
      const display = document.getElementById('checkoutUpiDisplay');
      display.innerHTML = 'Loading UPI Scanner...';
      const res = await apiCall('/upi');
      if (res.ok && res.data.length > 0) {
        const topScanner = res.data[0];
        display.innerHTML = `<img src="${topScanner.image_url}" style="max-width:150px; border-radius:8px; border:1px solid #eee; margin-top:5px;"><br><strong>${topScanner.name}</strong><br><small style="color:#666;">${topScanner.upi_id}</small>`;
      } else {
        display.innerHTML = '<span style="color:#e68a2e;">No UPI Scanner available. Please try another method.</span>';
      }
    } else {
      upiSection.style.display = 'none';
      screenshotInput.required = false;
    }
  });

  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('checkoutName').value;
    const phone = document.getElementById('checkoutPhone').value;
    const phoneAlt = document.getElementById('checkoutPhoneAlt').value;
    const district = document.getElementById('checkoutDistrict').value;
    const city = document.getElementById('checkoutCity').value;
    const address = document.getElementById('checkoutAddress').value;
    const pincode = document.getElementById('checkoutPincode').value;
    const payment = document.getElementById('paymentMethod').value;
    
    if (payment === 'upi') {
      const fileInput = document.getElementById('upiScreenshot');
      if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, ev.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        showToast("⚠️ Screenshot is required for UPI Payment!");
      }
    } else {
      placeOrder(name, phone, phoneAlt, district, city, address, pincode, payment, null);
    }
  });

  // Feedback form
  const stars = document.querySelectorAll('#ratingStars i');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-value'));
      document.getElementById('feedbackRating').value = val;
      stars.forEach(s => {
        if (parseInt(s.getAttribute('data-value')) <= val) s.classList.add('active');
        else s.classList.remove('active');
      });
    });
  });

  document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      target_id: document.getElementById('feedbackTargetId').value,
      type: document.getElementById('feedbackType').value,
      rating: document.getElementById('feedbackRating').value,
      comment: document.getElementById('feedbackComment').value
    };
    const res = await apiCall('/feedback', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      showToast('⭐ Thank you for your feedback!');
      closeModal('feedbackModal');
    } else {
      showToast('❌ Error: ' + res.msg);
    }
  });

  // Admin tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('admin' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1) + 'Tab').classList.add('active');
    });
  });

  // Add product form (admin)
  document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('prodName').value,
      description: document.getElementById('prodDesc').value,
      price: parseInt(document.getElementById('prodPrice').value),
      size: document.getElementById('prodSize') ? document.getElementById('prodSize').value : '',
      category: document.getElementById('prodCategory').value,
      image_url: document.getElementById('prodImage').value
    };

    const res = await apiCall('/products', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      document.getElementById('addProductForm').reset();
      showToast('✅ Product added!');
      loadProducts();
      setTimeout(renderAdminProducts, 500);
    } else {
      showToast('❌ Error: ' + res.msg);
    }
  });

  // Add UPI Scanner form (admin)
  const addUPIForm = document.getElementById('addUPIForm');
  if (addUPIForm) {
    addUPIForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const payload = {
        name: document.getElementById('upiName').value,
        upi_id: document.getElementById('upiID').value,
        image_url: document.getElementById('upiImage').value
      };

      const res = await apiCall('/upi', { method: 'POST', body: JSON.stringify(payload) });
      if (res.ok) {
        addUPIForm.reset();
        showToast('✅ UPI Scanner added!');
        renderAdminUPIs();
      } else {
        showToast('❌ Error: ' + res.msg);
      }
    });
  }

  // Search
  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(loadProducts, 300); // debounce API call
  });

  document.getElementById('clearSearch').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    searchTerm = '';
    loadProducts();
  });

  // Filters
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      loadProducts();
    });
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProductsUI(); // Just resort the loaded products
  });

  // Language
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
    showToast('🌐 Language changed!');
  });

  // Crop guidance
  document.getElementById('cropGuidanceBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showToast('🌿 Expert crop guidance available! Call +91 98765 43210');
  });

  // Smooth scroll nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Active nav on scroll
  window.addEventListener('scroll', () => {
    const sections = ['home', 'products', 'about', 'services', 'fertilizer-impact', 'gallery', 'contact'];
    let current = '';
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 150) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  // Animation Observer
  const observerOptions = { threshold: 0.2 };
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.anim-fade-up, .fertilizer-impact-section').forEach(el => {
    animObserver.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', init);