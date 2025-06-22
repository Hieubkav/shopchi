# ShoesStore - Website Bán Giày Thời Trang

Một website bán giày hiện đại được xây dựng với HTML5, Tailwind CSS và Vanilla JavaScript, kết hợp nhiều phong cách thiết kế như Dark Mode, Neumorphism, Glassmorphism, Minimalism và Flat Design.

## 🚀 Tính năng chính

### 🎨 Thiết kế
- **Dark Mode**: Giao diện tối tuyệt đối với màu chủ đạo đen-hồng
- **Enhanced Neumorphism**: Hiệu ứng 3D chân thực với đổ bóng sâu và chi tiết
- **Advanced Glassmorphism**: Hiệu ứng kính mờ cao cấp với backdrop blur
- **Minimalism**: Bố cục sạch sẽ với không gian âm rộng rãi
- **Flat Design**: Icons và elements đơn giản, 2D
- **Interactive Background**: Hiệu ứng nền động với particles và gradient orbs
- **Footprint Effect**: Hiệu ứng dấu chân khi click/touch trên màn hình

### 🛍️ Chức năng
- **Trang chủ**: Hero section, sản phẩm nổi bật, thương hiệu
- **Sản phẩm**: Lưới sản phẩm responsive với filter và search
- **Chi tiết sản phẩm**: Modal/trang với carousel hình ảnh, tùy chọn size/màu
- **Giỏ hàng**: Sidebar với quản lý sản phẩm, localStorage
- **Wishlist**: Danh sách yêu thích với localStorage
- **Tìm kiếm**: Modal tìm kiếm với gợi ý real-time
- **Responsive**: Hoạt động tốt trên mọi thiết bị

### 📱 Tương tác
- Smooth scrolling và animations
- Toast notifications
- Loading states
- Hover effects và transitions
- Swiper carousels
- AOS scroll animations

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Logic ứng dụng
- **Swiper.js**: Carousel/slider components
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icons

## 📁 Cấu trúc dự án

```
shoes/
├── index.html          # Trang chủ
├── product.html        # Trang chi tiết sản phẩm
├── about.html          # Trang giới thiệu
├── contact.html        # Trang liên hệ
├── style.css           # CSS tùy chỉnh
├── script.js           # JavaScript logic
├── images/             # Thư mục hình ảnh
└── README.md           # Tài liệu dự án
```

## 🚀 Cách sử dụng

### 1. Clone hoặc tải xuống dự án
```bash
git clone [repository-url]
cd shoes
```

### 2. Mở trực tiếp trong trình duyệt
- Mở file `index.html` trong trình duyệt
- Hoặc sử dụng Live Server extension trong VS Code

### 3. Triển khai lên GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch (thường là `main`)
4. Website sẽ có sẵn tại `https://[username].github.io/[repository-name]`

## 🎯 Tính năng chi tiết

### Trang chủ (index.html)
- **Header**: Logo, menu điều hướng, icons tiện ích
- **Hero Section**: Carousel sản phẩm với Swiper.js
- **Sản phẩm nổi bật**: Grid responsive với filter/search
- **Thương hiệu**: Showcase các brand nổi tiếng
- **Newsletter**: Form đăng ký nhận tin
- **Footer**: Links và thông tin liên hệ

### Quản lý sản phẩm
- **Dữ liệu**: Hardcode trong JavaScript (có thể dễ dàng thay thế bằng API)
- **Filter**: Theo danh mục, thương hiệu, giá
- **Search**: Tìm kiếm real-time
- **Pagination**: Load more products
- **Wishlist**: Lưu trữ trong localStorage

### Giỏ hàng
- **Sidebar**: Glassmorphism effect
- **CRUD**: Thêm, sửa, xóa sản phẩm
- **Tính toán**: Tự động cập nhật tổng tiền
- **Persistence**: Lưu trữ trong localStorage

### Responsive Design
- **Mobile-first**: Thiết kế ưu tiên mobile
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch-friendly**: Buttons và interactions phù hợp touch

## 🎨 Customization

### Màu sắc
Chỉnh sửa trong `tailwind.config`:
```javascript
colors: {
    primary: '#ec4899',      // Pink 500
    secondary: '#f97316',    // Orange 500
    accent: '#8b5cf6',       // Violet 500
    dark: '#000000',         // Pure Black
    'dark-light': '#111111', // Very Dark Gray
    'dark-lighter': '#1a1a1a' // Dark Gray
}
```

### Enhanced Neumorphism Effects
Tùy chỉnh trong `style.css`:
```css
.neumorphic-btn {
    background: linear-gradient(145deg, #1a1a1a, #000000);
    box-shadow:
        12px 12px 24px rgba(0, 0, 0, 0.8),
        -12px -12px 24px rgba(40, 40, 40, 0.3),
        inset 2px 2px 4px rgba(255, 255, 255, 0.05),
        inset -2px -2px 4px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(236, 72, 153, 0.1);
}
```

### Sản phẩm
Chỉnh sửa mảng `sampleProducts` trong `script.js`:
```javascript
const sampleProducts = [
    {
        id: 1,
        name: "Tên sản phẩm",
        brand: "brand",
        category: "category",
        price: 1000000,
        image: "url-hình-ảnh",
        // ... các thuộc tính khác
    }
];
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Development

### Local Development
```bash
# Sử dụng Live Server (VS Code extension)
# Hoặc Python simple server
python -m http.server 8000

# Hoặc Node.js serve
npx serve .
```

### Build cho Production
Dự án đã sẵn sàng cho production, không cần build process.

## 📝 TODO / Cải tiến

- [ ] Tích hợp API backend thực tế
- [ ] Thêm authentication/login
- [ ] Payment gateway integration
- [ ] Admin panel
- [ ] Product reviews system
- [ ] Advanced filtering (price range slider)
- [ ] Product comparison
- [ ] Recently viewed products
- [ ] Social sharing
- [ ] PWA features

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

- **Website**: [ShoesStore Demo](https://your-demo-url.com)
- **Email**: info@shoesstore.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Swiper.js](https://swiperjs.com/) - Carousel/Slider
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Font Awesome](https://fontawesome.com/) - Icons
- [Unsplash](https://unsplash.com/) - Stock Photos

---

**Made with ❤️ for Vietnamese shoe lovers**
