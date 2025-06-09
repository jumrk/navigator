export default function HomePage() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }
        
        .header {
          background-color: #ffffff;
          padding: 20px 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #2563eb;
        }
        
        .nav a {
          margin-left: 20px;
          text-decoration: none;
          color: #444;
          font-weight: 500;
        }
        
        .hero {
          background: url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        
        .hero-content {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 40px;
          border-radius: 10px;
        }
        
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        
        .hero-content p {
          font-size: 1.1rem;
        }
        
        .search-section {
          margin: 30px auto;
          max-width: 800px;
          padding: 0 20px;
        }
        
        .search-box {
          display: flex;
          gap: 10px;
        }
        
        .search-box input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        
        .search-box button {
          padding: 12px 20px;
          background-color: #2563eb;
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
        }
        
        .listings {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px 40px;
        }
        
        .property-card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: transform 0.2s;
        }
        
        .property-card:hover {
          transform: scale(1.02);
        }
        
        .property-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .property-info {
          padding: 15px;
        }
        
        .property-info h3 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        
        .property-info p {
          font-size: 0.9rem;
          color: #666;
        }
        
        .footer {
          text-align: center;
          padding: 30px 10px;
          background-color: #f1f1f1;
          font-size: 0.9rem;
          color: #888;
          line-height: 1.6;
        }

        .footer-contact {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #555;
        }

        .footer-contact div {
          margin: 5px 0;
        }
      `}</style>

      <header className="header">
        <div className="logo">Địa Ốc Việt</div>
        <nav className="nav">
          <a href="#home">Trang chủ</a>
          <a href="#listings">Bất động sản</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Tìm kiếm ngôi nhà mơ ước của bạn</h1>
          <p>Địa điểm uy tín để mua bán nhà đất trên toàn quốc</p>
        </div>
      </section>

      <section className="search-section">
        <div className="search-box">
          <input type="text" placeholder="Tìm theo vị trí, giá, diện tích..." />
          <button>Tìm kiếm</button>
        </div>
      </section>

      <section className="listings" id="listings">
        {[
          {
            title: 'Nhà phố Quận 7',
            description: 'Diện tích 80m² · Giá: 3.2 tỷ · Sổ hồng riêng',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            alt: 'House in District 7'
          },
          {
            title: 'Căn hộ cao cấp Thủ Đức',
            description: 'Diện tích 60m² · Giá: 2.1 tỷ · View đẹp',
            image: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
            alt: 'Apartment in Thu Duc'
          },
          {
            title: 'Biệt thự nghỉ dưỡng Đà Lạt',
            description: 'Diện tích 150m² · Giá: 6.5 tỷ · Gần trung tâm',
            image: 'https://images.unsplash.com/photo-1572120360610-d971b9b788cc',
            alt: 'Villa in Da Lat'
          }
        ].map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={property.alt} />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        © 2025 Địa Ốc Việt. Mọi quyền được bảo lưu.
        <div className="footer-contact">
          <div>Địa chỉ: 123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</div>
          <div>Email: contact@diaocviet.vn</div>
          <div>Điện thoại: 0909 123 456</div>
        </div>
      </footer>
    </>
  );
}
