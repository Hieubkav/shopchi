// ShoesStore JavaScript - Main Application Logic

// Global Variables
let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [];

// Sample Products Data
const sampleProducts = [
    {
        id: 1,
        name: "Nike Air Max 270",
        brand: "nike",
        category: "sneakers",
        price: 2500000,
        originalPrice: 3000000,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop"
        ],
        description: "Giày thể thao Nike Air Max 270 với công nghệ đệm khí tiên tiến, mang lại sự thoải mái tối đa cho mọi bước chân.",
        sizes: ["39", "40", "41", "42", "43", "44"],
        colors: ["Đen", "Trắng", "Xanh"],
        badge: "sale",
        rating: 4.8,
        reviews: 156
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        brand: "adidas",
        category: "sneakers",
        price: 3200000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
        ],
        description: "Adidas Ultraboost 22 với công nghệ Boost độc quyền, mang lại năng lượng trở lại cho mỗi bước chạy.",
        sizes: ["38", "39", "40", "41", "42", "43"],
        colors: ["Trắng", "Đen", "Xám"],
        badge: "new",
        rating: 4.9,
        reviews: 203
    },
    {
        id: 3,
        name: "Converse Chuck Taylor",
        brand: "converse",
        category: "casual",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
        ],
        description: "Giày Converse Chuck Taylor All Star cổ điển, biểu tượng thời trang không bao giờ lỗi thời.",
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        colors: ["Đen", "Trắng", "Đỏ", "Xanh navy"],
        badge: "hot",
        rating: 4.6,
        reviews: 89
    },
    {
        id: 4,
        name: "Puma RS-X",
        brand: "puma",
        category: "sneakers",
        price: 2800000,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
        ],
        description: "Puma RS-X với thiết kế chunky sneaker đầy cá tính, phù hợp với phong cách streetwear hiện đại.",
        sizes: ["39", "40", "41", "42", "43"],
        colors: ["Đa màu", "Trắng", "Đen"],
        rating: 4.5,
        reviews: 67
    },
    {
        id: 5,
        name: "Vans Old Skool",
        brand: "vans",
        category: "casual",
        price: 1800000,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop"
        ],
        description: "Vans Old Skool với thiết kế skate cổ điển, đường kẻ sọc đặc trưng và độ bền cao.",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
        colors: ["Đen/Trắng", "Xanh navy", "Đỏ"],
        rating: 4.7,
        reviews: 134
    },
    {
        id: 6,
        name: "Dr. Martens 1460",
        brand: "drmartens",
        category: "boots",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=400&h=400&fit=crop"
        ],
        description: "Dr. Martens 1460 boot cổ điển với da bò cao cấp và đế AirWair độc quyền, bền bỉ theo thời gian.",
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        colors: ["Đen", "Nâu", "Cherry Red"],
        badge: "new",
        rating: 4.8,
        reviews: 98
    },
    {
        id: 7,
        name: "Reebok Classic Leather",
        brand: "reebok",
        category: "casual",
        price: 1600000,
        originalPrice: 2000000,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop"
        ],
        description: "Reebok Classic Leather với thiết kế tối giản, chất liệu da mềm mại và thoải mái cho việc sử dụng hàng ngày.",
        sizes: ["37", "38", "39", "40", "41", "42", "43"],
        colors: ["Trắng", "Đen", "Xám"],
        badge: "sale",
        rating: 4.4,
        reviews: 76
    },
    {
        id: 8,
        name: "New Balance 574",
        brand: "newbalance",
        category: "sneakers",
        price: 2200000,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop"
        ],
        description: "New Balance 574 với công nghệ ENCAP midsole, mang lại sự cân bằng hoàn hảo giữa đệm và ổn định.",
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        colors: ["Xám", "Xanh navy", "Đen"],
        rating: 4.6,
        reviews: 112
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    products = [...sampleProducts];
    filteredProducts = [...products];

    initializeApp();
    loadProducts();
    updateCartUI();
    updateWishlistUI();
    initializeFootprintEffect();
    createFloatingParticles();

    // Debug: Test footprint effect
    console.log('Footprint effect initialized. Click anywhere on the page to see footprints!');
});

// Initialize App Components
function initializeApp() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Initialize Swiper
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    
    // Event Listeners
    setupEventListeners();
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

    // Mobile Search Button
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', toggleSearchModal);
    }

    // Cart
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('closeCartBtn').addEventListener('click', toggleCart);

    // Search
    document.getElementById('searchBtn').addEventListener('click', toggleSearchModal);
    document.getElementById('closeSearchBtn').addEventListener('click', toggleSearchModal);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('modalSearchInput').addEventListener('input', handleModalSearch);

    // Filters
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('brandFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Product Modal
    document.getElementById('closeModalBtn').addEventListener('click', closeProductModal);

    // Load More
    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreProducts);

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

    // Close modals on outside click
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) closeProductModal();
    });

    document.getElementById('searchModal').addEventListener('click', function(e) {
        if (e.target === this) toggleSearchModal();
    });

    // Smooth scrolling for navigation links
    setupSmoothScrolling();
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }

                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');

    // Add animation class
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('slide-in-left');
    }
}

// Cart Functions
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('translate-x-full');
}

function addToCart(productId, size = null, color = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.size === size && 
        item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            color: color,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showToast('Đã thêm sản phẩm vào giỏ hàng!', 'success');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showToast('Đã xóa sản phẩm khỏi giỏ hàng!', 'info');
}

function updateCartQuantity(index, quantity) {
    if (quantity <= 0) {
        removeFromCart(index);
        return;
    }
    
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count
    if (totalItems > 0) {
        cartCount.textContent = totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-8 text-gray-400">
                <i class="fas fa-shopping-cart text-4xl mb-4"></i>
                <p>Giỏ hàng trống</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="neumorphic-card p-4 rounded-lg">
                <div class="flex items-center gap-4">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                    <div class="flex-1">
                        <h3 class="font-semibold text-sm">${item.name}</h3>
                        <p class="text-gray-400 text-xs">
                            ${item.size ? `Size: ${item.size}` : ''} 
                            ${item.color ? `- Màu: ${item.color}` : ''}
                        </p>
                        <p class="text-primary font-bold">${formatPrice(item.price)}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})" class="neumorphic-btn w-8 h-8 rounded-full text-sm">-</button>
                        <span class="w-8 text-center">${item.quantity}</span>
                        <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})" class="neumorphic-btn w-8 h-8 rounded-full text-sm">+</button>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-300 ml-2">
                        <i class="fas fa-trash text-sm"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    cartTotal.textContent = formatPrice(totalPrice);
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Đã xóa khỏi danh sách yêu thích!', 'info');
    } else {
        wishlist.push(productId);
        showToast('Đã thêm vào danh sách yêu thích!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    loadProducts(); // Reload to update heart icons
}

function updateWishlistUI() {
    const wishlistCount = document.getElementById('wishlistCount');
    
    if (wishlist.length > 0) {
        wishlistCount.textContent = wishlist.length;
        wishlistCount.classList.remove('hidden');
    } else {
        wishlistCount.classList.add('hidden');
    }
}

// Search Functions
function toggleSearchModal() {
    const searchModal = document.getElementById('searchModal');
    searchModal.classList.toggle('hidden');
    
    if (!searchModal.classList.contains('hidden')) {
        document.getElementById('modalSearchInput').focus();
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    applyFilters(query);
}

function handleModalSearch(e) {
    const query = e.target.value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (query.length < 2) {
        searchResults.innerHTML = '<p class="text-gray-400 text-center py-4">Nhập ít nhất 2 ký tự để tìm kiếm</p>';
        return;
    }
    
    const results = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="text-gray-400 text-center py-4">Không tìm thấy sản phẩm nào</p>';
        return;
    }
    
    searchResults.innerHTML = results.slice(0, 5).map(product => `
        <div class="neumorphic-card p-4 rounded-lg cursor-pointer hover:bg-dark-lighter transition-colors" onclick="openProductModal(${product.id}); toggleSearchModal();">
            <div class="flex items-center gap-4">
                <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg">
                <div>
                    <h3 class="font-semibold">${product.name}</h3>
                    <p class="text-gray-400 text-sm">${product.brand.toUpperCase()}</p>
                    <p class="text-primary font-bold">${formatPrice(product.price)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Functions
function applyFilters(searchQuery = '') {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const searchInput = searchQuery || document.getElementById('searchInput').value.toLowerCase();

    filteredProducts = products.filter(product => {
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesBrand = !brandFilter || product.brand === brandFilter;
        const matchesSearch = !searchInput ||
            product.name.toLowerCase().includes(searchInput) ||
            product.brand.toLowerCase().includes(searchInput) ||
            product.category.toLowerCase().includes(searchInput);

        let matchesPrice = true;
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            matchesPrice = product.price >= min && product.price <= max;
        }

        return matchesCategory && matchesBrand && matchesSearch && matchesPrice;
    });

    currentPage = 1;
    loadProducts();
}

function clearFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('brandFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('searchInput').value = '';

    filteredProducts = [...products];
    currentPage = 1;
    loadProducts();
}

// Product Display Functions
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-6xl text-gray-600 mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">Không tìm thấy sản phẩm</h3>
                <p class="text-gray-400">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

    // Show/hide load more button
    if (endIndex >= filteredProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreProducts() {
    currentPage++;
    loadProducts();
}

function createProductCard(product) {
    const isInWishlist = wishlist.includes(product.id);
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;

    return `
        <div class="neumorphic-card product-card rounded-lg overflow-hidden" data-aos="fade-up">
            ${product.badge ? `<div class="badge ${product.badge}">${getBadgeText(product.badge)}</div>` : ''}
            <div class="product-image relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover transition-transform duration-300">
                <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div class="flex gap-2">
                        <button onclick="openProductModal(${product.id})" class="neumorphic-btn p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button onclick="toggleWishlist(${product.id})" class="neumorphic-btn p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors ${isInWishlist ? 'text-red-400' : ''}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm text-gray-400 uppercase tracking-wide">${product.brand}</span>
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400 text-sm"></i>
                        <span class="text-sm text-gray-400">${product.rating}</span>
                    </div>
                </div>
                <h3 class="font-semibold text-lg mb-3 line-clamp-2">${product.name}</h3>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <span class="price-tag ${hasDiscount ? 'sale' : ''}">${formatPrice(product.price)}</span>
                        ${hasDiscount ? `<span class="text-gray-500 line-through text-sm">${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    <span class="text-sm text-gray-400">${product.reviews} đánh giá</span>
                </div>
                <button onclick="addToCart(${product.id})" class="w-full neumorphic-btn bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all btn-ripple">
                    <i class="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                </button>
            </div>
        </div>
    `;
}

function getBadgeText(badge) {
    const badges = {
        'new': 'Mới',
        'sale': 'Giảm giá',
        'hot': 'Hot'
    };
    return badges[badge] || badge;
}

// Product Modal Functions
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');

    const isInWishlist = wishlist.includes(product.id);
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <div class="swiper productSwiper mb-4">
                    <div class="swiper-wrapper">
                        ${product.images.map(img => `
                            <div class="swiper-slide">
                                <img src="${img}" alt="${product.name}" class="w-full h-96 object-cover rounded-lg">
                            </div>
                        `).join('')}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-sm text-gray-400 uppercase tracking-wide">${product.brand}</span>
                    <div class="flex items-center gap-2">
                        <div class="flex items-center gap-1">
                            <i class="fas fa-star text-yellow-400"></i>
                            <span>${product.rating}</span>
                        </div>
                        <span class="text-gray-400">•</span>
                        <span class="text-gray-400">${product.reviews} đánh giá</span>
                    </div>
                </div>
                <h1 class="text-3xl font-bold mb-4">${product.name}</h1>
                <div class="flex items-center gap-4 mb-6">
                    <span class="text-3xl font-bold text-primary">${formatPrice(product.price)}</span>
                    ${hasDiscount ? `<span class="text-xl text-gray-500 line-through">${formatPrice(product.originalPrice)}</span>` : ''}
                    ${hasDiscount ? `<span class="bg-red-500 text-white px-2 py-1 rounded text-sm">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
                </div>
                <p class="text-gray-300 mb-6">${product.description}</p>

                <div class="space-y-4 mb-6">
                    <div>
                        <label class="block text-sm font-semibold mb-2">Kích thước:</label>
                        <div class="flex flex-wrap gap-2">
                            ${product.sizes.map(size => `
                                <button class="size-option neumorphic-btn px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors" data-size="${size}">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-2">Màu sắc:</label>
                        <div class="flex flex-wrap gap-2">
                            ${product.colors.map(color => `
                                <button class="color-option neumorphic-btn px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors" data-color="${color}">
                                    ${color}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <button onclick="addToCartFromModal(${product.id})" class="flex-1 neumorphic-btn bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all btn-ripple">
                        <i class="fas fa-shopping-cart mr-2"></i>Thêm vào giỏ
                    </button>
                    <button onclick="toggleWishlist(${product.id})" class="neumorphic-btn p-3 rounded-lg ${isInWishlist ? 'text-red-400' : ''} hover:text-red-400 transition-colors">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');

    // Initialize product swiper
    setTimeout(() => {
        new Swiper('.productSwiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // Setup size and color selection
        setupProductOptions();
    }, 100);
}

function setupProductOptions() {
    const sizeOptions = document.querySelectorAll('.size-option');
    const colorOptions = document.querySelectorAll('.color-option');

    sizeOptions.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeOptions.forEach(b => b.classList.remove('bg-primary', 'text-white'));
            this.classList.add('bg-primary', 'text-white');
        });
    });

    colorOptions.forEach(btn => {
        btn.addEventListener('click', function() {
            colorOptions.forEach(b => b.classList.remove('bg-primary', 'text-white'));
            this.classList.add('bg-primary', 'text-white');
        });
    });
}

function addToCartFromModal(productId) {
    const selectedSize = document.querySelector('.size-option.bg-primary')?.dataset.size;
    const selectedColor = document.querySelector('.color-option.bg-primary')?.dataset.color;

    if (!selectedSize || !selectedColor) {
        showToast('Vui lòng chọn kích thước và màu sắc!', 'warning');
        return;
    }

    addToCart(productId, selectedSize, selectedColor);
    closeProductModal();
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');

    toast.className = `toast ${type} p-4 rounded-lg mb-2 flex items-center gap-3 min-w-80`;

    const icons = {
        success: 'fas fa-check-circle text-green-400',
        error: 'fas fa-exclamation-circle text-red-400',
        warning: 'fas fa-exclamation-triangle text-yellow-400',
        info: 'fas fa-info-circle text-blue-400'
    };

    toast.innerHTML = `
        <i class="${icons[type]}"></i>
        <span class="flex-1">${message}</span>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white">
            <i class="fas fa-times"></i>
        </button>
    `;

    toastContainer.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast('Giỏ hàng trống!', 'warning');
        return;
    }

    // Simulate checkout process
    showToast('Chức năng thanh toán đang được phát triển!', 'info');
}

// Footprint Effect
function initializeFootprintEffect() {
    console.log('🦶 Initializing footprint effect...');

    const footprintContainer = document.getElementById('footprintContainer');
    if (!footprintContainer) {
        console.error('❌ Footprint container not found!');
        return;
    }

    console.log('✅ Footprint container found:', footprintContainer);

    let footprintCount = 0;
    const maxFootprints = 15;

    // Add click/touch event listeners to document
    document.addEventListener('click', createFootprint, false);
    document.addEventListener('touchstart', createFootprint, false);

    console.log('✅ Event listeners added for footprint effect');

    function createFootprint(e) {
        console.log('🖱️ Click detected at:', e.clientX, e.clientY);

        // Skip if clicking on interactive elements
        const target = e.target;
        if (target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.tagName === 'INPUT' ||
            target.tagName === 'SELECT' ||
            target.closest('button') ||
            target.closest('a') ||
            target.closest('.neumorphic-btn')) {
            console.log('⏭️ Skipping interactive element:', target.tagName);
            return;
        }

        // Prevent too many footprints
        if (footprintCount >= maxFootprints) {
            console.log('⚠️ Max footprints reached');
            return;
        }

        console.log('🦶 Creating footprint...');

        const footprint = document.createElement('div');

        // Create a simple, highly visible footprint
        footprint.innerHTML = '🦶';

        // Apply all styles inline to ensure visibility
        footprint.style.cssText = `
            position: fixed !important;
            left: ${x - 25}px !important;
            top: ${y - 25}px !important;
            width: 50px !important;
            height: 50px !important;
            background: #ec4899 !important;
            border: 3px solid #f472b6 !important;
            border-radius: 50% !important;
            z-index: 99999 !important;
            pointer-events: none !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 30px !important;
            color: white !important;
            text-shadow: 0 0 10px rgba(0,0,0,0.8) !important;
            box-shadow: 0 0 30px #ec4899, 0 0 60px #f472b6 !important;
            animation: footprintFade 3s ease-out forwards !important;
            user-select: none !important;
            visibility: visible !important;
            opacity: 1 !important;
        `;

        // Get click/touch position
        let x, y;
        if (e.type === 'touchstart' && e.touches && e.touches[0]) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }

        // Update position in inline style
        footprint.style.left = (x - 25) + 'px';
        footprint.style.top = (y - 25) + 'px';

        // Add random rotation
        const rotation = Math.random() * 60 - 30;
        const scale = 0.8 + Math.random() * 0.4;
        footprint.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        console.log('📍 Footprint positioned at:', x, y, 'with rotation:', rotation, 'scale:', scale);

        // Add to body instead of container to avoid any conflicts
        document.body.appendChild(footprint);
        footprintCount++;

        console.log('✅ Footprint added to body! Total count:', footprintCount);
        console.log('🔍 Footprint element:', footprint);
        console.log('🔍 Footprint computed style:', window.getComputedStyle(footprint));

        // Remove footprint after animation
        setTimeout(() => {
            if (footprint && footprint.parentNode) {
                document.body.removeChild(footprint);
                footprintCount--;
                console.log('🗑️ Footprint removed. Remaining:', footprintCount);
            }
        }, 3000);
    }

    // Test function - create a footprint at center of screen
    window.testFootprint = function() {
        console.log('🧪 Testing footprint at center...');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const testEvent = {
            clientX: centerX,
            clientY: centerY,
            target: document.body,
            type: 'click'
        };

        createFootprint(testEvent);
    };

    // Simple test function that creates footprint directly
    window.createTestFootprint = function() {
        console.log('🧪 Creating direct test footprint...');

        const footprint = document.createElement('div');
        footprint.innerHTML = '🦶';
        footprint.style.cssText = `
            position: fixed !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 80px !important;
            height: 80px !important;
            background: red !important;
            border: 5px solid yellow !important;
            border-radius: 50% !important;
            z-index: 999999 !important;
            font-size: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: white !important;
        `;

        document.body.appendChild(footprint);

        setTimeout(() => {
            if (footprint.parentNode) {
                document.body.removeChild(footprint);
            }
        }, 5000);

        console.log('✅ Direct test footprint created!');
    };

    console.log('🧪 Test functions available:');
    console.log('- window.testFootprint()');
    console.log('- window.createTestFootprint()');
}

// Enhanced Floating Particles
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');

    // Create additional particles dynamically
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, rgba(236, 72, 153, ${Math.random() * 0.5 + 0.2}), transparent)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationName = 'float';
        particle.style.animationIterationCount = 'infinite';
        particle.style.animationTimingFunction = 'linear';

        particlesContainer.appendChild(particle);
    }

    // Add orange particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, rgba(249, 115, 22, ${Math.random() * 0.4 + 0.1}), transparent)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 25 + 20) + 's';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationName = 'float';
        particle.style.animationIterationCount = 'infinite';
        particle.style.animationTimingFunction = 'linear';

        particlesContainer.appendChild(particle);
    }
}

// Enhanced Button Ripple Effect
function addRippleEffect() {
    document.querySelectorAll('.btn-ripple').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize ripple effects after DOM load
setTimeout(addRippleEffect, 1000);
