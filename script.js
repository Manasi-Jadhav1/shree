// script.js - Complete Working Application

// ==================== PRODUCT DATA WITH REAL IMAGES ====================
const productsData = [
  { id:1, name:"NPK 19-19-19 Fertilizer", desc:"Balanced NPK fertilizer for all crops. Promotes healthy growth and higher yield.", price:850, category:"Fertilizers", image:"https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=300&h=200&fit=crop&q=80" },
  { id:2, name:"Urea 46% Nitrogen", desc:"High nitrogen content urea for rapid vegetative growth.", price:320, category:"Fertilizers", image:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=200&fit=crop&q=80" },
  { id:3, name:"DAP Fertilizer 18-46-0", desc:"Di-ammonium phosphate for strong root development.", price:1350, category:"Fertilizers", image:"https://images.unsplash.com/photo-1592722182480-1a2b738b8a3b?w=300&h=200&fit=crop&q=80" },
  { id:4, name:"Imidacloprid 17.8% SL", desc:"Systemic insecticide against sucking pests.", price:450, category:"Insecticides", image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&q=80" },
  { id:5, name:"Azoxystrobin 23% SC", desc:"Broad-spectrum fungicide for powdery mildew.", price:690, category:"Fungicides", image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop&q=80" },
  { id:6, name:"Hybrid Maize Seeds", desc:"High-yield maize variety with drought tolerance.", price:420, category:"Seeds", image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop&q=80" },
  { id:7, name:"Organic Vermicompost", desc:"Nutrient-rich organic manure for soil health.", price:280, category:"Organic", image:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=200&fit=crop&q=80" },
  { id:8, name:"Seaweed Extract Booster", desc:"Natural growth stimulant for roots.", price:540, category:"Plant Growth Boosters", image:"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=300&h=200&fit=crop&q=80" },
  { id:9, name:"Lambda-Cyhalothrin 5% EC", desc:"Effective crop protection against caterpillars.", price:380, category:"Crop Protection", image:"https://images.unsplash.com/photo-1595228283852-8a55e7ee7489?w=300&h=200&fit=crop&q=80" },
  { id:10, name:"Potash (MOP) Fertilizer", desc:"Enhances disease resistance and fruit quality.", price:920, category:"Fertilizers", image:"https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=300&h=200&fit=crop&q=80" },
  { id:11, name:"Neem Oil Cold Pressed", desc:"Organic pesticide and fungicide solution.", price:299, category:"Organic", image:"https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=300&h=200&fit=crop&q=80" },
  { id:12, name:"Paddy Super Hybrid Seed", desc:"High tillering, blast resistant paddy seeds.", price:580, category:"Seeds", image:"https://images.unsplash.com/photo-1536304993881-460e32f50647?w=300&h=200&fit=crop&q=80" },
  { id:13, name:"Tebuconazole 25.9% EC", desc:"Systemic fungicide for smut and rust.", price:520, category:"Fungicides", image:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&h=200&fit=crop&q=80" },
  { id:14, name:"Acephate 75% SP", desc:"Insecticide for stem borer control.", price:310, category:"Insecticides", image:"https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=300&h=200&fit=crop&q=80" },
  { id:15, name:"Plant Growth Promoter", desc:"Boosts cell division and shoot growth.", price:475, category:"Plant Growth Boosters", image:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=200&fit=crop&q=80" },
  { id:16, name:"Chlorpyriphos 20% EC", desc:"Soil insecticide for termite control.", price:425, category:"Crop Protection", image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80" }
];

const galleryData = [
  { title:"Organic Farming Field", image:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop&q=80" },
  { title:"Paddy Harvest", image:"https://images.unsplash.com/photo-1536304993881-460e32f50647?w=400&h=300&fit=crop&q=80" },
  { title:"Vegetable Garden", image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&q=80" },
  { title:"Farmer Training", image:"https://images.unsplash.com/photo-1589923188651-268a9765e432?w=400&h=300&fit=crop&q=80" },
  { title:"Quality Seeds", image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&q=80" },
  { title:"Modern Irrigation", image:"https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=300&fit=crop&q=80" }
];

// ==================== STATE ====================
let currentLanguage = "en";
let activeFilter = "all";
let searchTerm = "";
let sortBy = "default";
let cart = JSON.parse(localStorage.getItem('smk_cart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('smk_currentUser') || 'null');

function getUsers() { return JSON.parse(localStorage.getItem('smk_users') || '[]'); }
function saveUsers(users) { localStorage.setItem('smk_users', JSON.stringify(users)); }
function getOrders() { return JSON.parse(localStorage.getItem('smk_orders') || '[]'); }
function saveOrders(orders) { localStorage.setItem('smk_orders', JSON.stringify(orders)); }
function getCustomProducts() { return JSON.parse(localStorage.getItem('smk_customProducts') || '[]'); }
function saveCustomProducts(p) { localStorage.setItem('smk_customProducts', JSON.stringify(p)); }
function getAllProducts() { return [...productsData, ...getCustomProducts()]; }
function saveCart() { localStorage.setItem('smk_cart', JSON.stringify(cart)); }

// ==================== AUTH SYSTEM ====================
function updateAuthUI() {
  const authButtons = document.getElementById('authButtons');
  const userInfo = document.getElementById('userInfo');
  const authGate = document.getElementById('authGate');
  const adminBtn = document.getElementById('adminPanelBtn');

  if (currentUser) {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    document.getElementById('userNameDisplay').textContent = '👤 ' + currentUser.name;
    authGate.classList.add('hidden');
    document.body.classList.remove('auth-locked');
    adminBtn.style.display = currentUser.role === 'admin' ? 'inline-block' : 'none';
  } else {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
    authGate.classList.remove('hidden');
    document.body.classList.add('auth-locked');
    adminBtn.style.display = 'none';
  }
  updateCartCount();
}

function registerUser(name, email, password, role) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered!' };
  if (name.trim().length < 2) return { ok: false, msg: 'Name must be at least 2 characters.' };
  if (password.length < 6) return { ok: false, msg: 'Password must be at least 6 characters.' };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { ok: false, msg: 'Please enter a valid email address.' };
  const user = { id: Date.now(), name: name.trim(), email: email.toLowerCase().trim(), password, role, createdAt: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  return { ok: true, msg: 'Registration successful! Please login.' };
}

function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email.toLowerCase().trim() && u.password === password);
  if (!user) return { ok: false, msg: 'Invalid email or password!' };
  currentUser = { id: user.id, name: user.name, email: user.email, role: user.role };
  localStorage.setItem('smk_currentUser', JSON.stringify(currentUser));
  return { ok: true };
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('smk_currentUser');
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
function addToCart(productId) {
  if (!currentUser) { showToast('⚠️ Please login to add items to cart!'); openModal('loginModal'); return; }
  const allProducts = getAllProducts();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 }); }
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
      <div class="cart-item-info"><strong>${item.name}</strong><span>₹${item.price.toLocaleString()} × ${item.qty}</span></div>
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

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
  const allProducts = getAllProducts();
  let filtered = allProducts.filter(product => {
    if (activeFilter !== "all" && product.category !== activeFilter) return false;
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      return product.name.toLowerCase().includes(term) || product.desc.toLowerCase().includes(term);
    }
    return true;
  });
  if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById("productCount").innerText = `${filtered.length} products found`;
  const grid = document.getElementById("productGrid");
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px;">🌱 No products found.</div>';
    return;
  }
  grid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-img"><img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'"></div>
      <div class="product-title">${product.name}</div>
      <div class="product-category">${product.category}</div>
      <div class="product-desc">${product.desc.substring(0, 80)}...</div>
      <div class="price">₹${product.price.toLocaleString()}</div>
      <button class="buy-btn" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Buy Now →</button>
    </div>
  `).join("");
}

// ==================== GALLERY ====================
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
  const allProducts = getAllProducts();
  list.innerHTML = allProducts.map(p => `
    <div class="admin-product-item">
      <div><strong>${p.name}</strong> — ₹${p.price} (${p.category})</div>
      ${p.id > 16 ? `<button class="delete-btn" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i> Delete</button>` : '<span style="color:#999;font-size:0.8rem;">Default</span>'}
    </div>
  `).join('');
}

function deleteProduct(id) {
  let custom = getCustomProducts();
  custom = custom.filter(p => p.id !== id);
  saveCustomProducts(custom);
  renderAdminProducts();
  renderProducts();
  showToast('🗑️ Product deleted!');
}

function renderAdminOrders() {
  const orders = getOrders();
  const list = document.getElementById('ordersList');
  if (orders.length === 0) { list.innerHTML = '<p style="color:#999;padding:20px;">No orders yet.</p>'; return; }
  list.innerHTML = orders.map(o => `
    <div class="order-item">
      <div><strong>Order #${o.id}</strong> — ${o.customerName} (${o.phone})<br>
      <small>${o.items.map(i => i.name + ' ×' + i.qty).join(', ')}</small><br>
      <small>Payment: ${o.payment} | ${new Date(o.date).toLocaleDateString()}</small></div>
      <div><strong>₹${o.total.toLocaleString()}</strong></div>
    </div>
  `).join('');
}

function renderAdminUsers() {
  const users = getUsers();
  const list = document.getElementById('usersList');
  if (users.length === 0) { list.innerHTML = '<p style="color:#999;padding:20px;">No users yet.</p>'; return; }
  list.innerHTML = users.map(u => `
    <div class="user-item">
      <div><strong>${u.name}</strong> — ${u.email}<br><small>Role: ${u.role} | Joined: ${new Date(u.createdAt).toLocaleDateString()}</small></div>
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
  const form = document.getElementById('checkoutForm');
  if (currentUser) {
    document.getElementById('checkoutName').value = currentUser.name;
  }
  document.getElementById('checkoutSummary').innerHTML = `
    <div class="checkout-items">${cart.map(i => `<div>${i.name} × ${i.qty} = ₹${(i.price*i.qty).toLocaleString()}</div>`).join('')}</div>
    <div class="checkout-total"><strong>Total: ₹${getCartTotal().toLocaleString()}</strong></div>
  `;
  openModal('checkoutModal');
}

function placeOrder(name, phone, address, payment) {
  const order = {
    id: Date.now(),
    userId: currentUser ? currentUser.id : 0,
    customerName: name,
    phone, address, payment,
    items: [...cart],
    total: getCartTotal(),
    date: new Date().toISOString()
  };
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  cart = [];
  saveCart();
  updateCartCount();
  closeModal('checkoutModal');
  document.getElementById('orderIdDisplay').textContent = 'Order ID: #' + order.id;
  openModal('orderSuccessModal');
}

// ==================== INIT ====================
function init() {
  updateAuthUI();
  renderProducts();
  renderGallery();

  // Auth gate buttons
  document.getElementById('gateLoginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('gateRegisterBtn').addEventListener('click', () => openModal('registerModal'));

  // Header auth buttons
  document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
  document.getElementById('registerBtn').addEventListener('click', () => openModal('registerModal'));
  document.getElementById('logoutBtn').addEventListener('click', logoutUser);
  document.getElementById('adminPanelBtn').addEventListener('click', () => {
    renderAdminProducts(); renderAdminOrders(); renderAdminUsers(); openModal('adminPanel');
  });

  // Switch login <-> register
  document.getElementById('switchToRegister').addEventListener('click', (e) => { e.preventDefault(); closeModal('loginModal'); openModal('registerModal'); });
  document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); closeModal('registerModal'); openModal('loginModal'); });

  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-modal')));
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal.id); });
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllModals(); });

  // Login form
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const errEl = document.getElementById('loginError');
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    const result = loginUser(email, pass);
    if (result.ok) {
      errEl.style.display = 'none';
      closeModal('loginModal');
      updateAuthUI();
      showToast('🎉 Welcome back, ' + currentUser.name + '!');
      document.getElementById('loginForm').reset();
    } else {
      errEl.textContent = result.msg; errEl.style.display = 'block';
    }
  });

  // Register form
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const errEl = document.getElementById('registerError');
    const successEl = document.getElementById('registerSuccess');
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;
    const result = registerUser(name, email, pass, role);
    if (result.ok) {
      errEl.style.display = 'none';
      successEl.textContent = result.msg; successEl.style.display = 'block';
      document.getElementById('registerForm').reset();
      setTimeout(() => { successEl.style.display = 'none'; closeModal('registerModal'); openModal('loginModal'); }, 1500);
    } else {
      successEl.style.display = 'none';
      errEl.textContent = result.msg; errEl.style.display = 'block';
    }
  });

  // Cart button
  document.getElementById('shopNowBtn').addEventListener('click', () => {
    if (!currentUser) { showToast('⚠️ Please login first!'); openModal('loginModal'); return; }
    renderCart(); openModal('cartModal');
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', processCheckout);
  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('checkoutName').value;
    const phone = document.getElementById('checkoutPhone').value;
    const address = document.getElementById('checkoutAddress').value;
    const payment = document.getElementById('paymentMethod').value;
    if (!name || !phone || !address) { showToast('⚠️ Please fill all fields!'); return; }
    placeOrder(name, phone, address, payment);
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
  document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const custom = getCustomProducts();
    const newProd = {
      id: Date.now(),
      name: document.getElementById('prodName').value,
      desc: document.getElementById('prodDesc').value,
      price: parseInt(document.getElementById('prodPrice').value),
      category: document.getElementById('prodCategory').value,
      image: document.getElementById('prodImage').value || 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop&q=80'
    };
    custom.push(newProd);
    saveCustomProducts(custom);
    renderAdminProducts();
    renderProducts();
    document.getElementById('addProductForm').reset();
    showToast('✅ Product added!');
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => { searchTerm = e.target.value; renderProducts(); });
  document.getElementById('clearSearch').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    searchTerm = '';
    renderProducts();
  });

  // Filters
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', (e) => { sortBy = e.target.value; renderProducts(); });

  // Language
  document.getElementById('languageSelect').addEventListener('change', (e) => { currentLanguage = e.target.value; showToast('🌐 Language changed!'); });

  // Crop guidance
  document.getElementById('cropGuidanceBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showToast('🌿 Expert crop guidance available! Call +91 98765 43210');
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Message sent successfully! We\'ll contact you soon.');
    document.getElementById('contactForm').reset();
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
    const sections = ['home','products','about','services','gallery','contact'];
    let current = '';
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 150) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);