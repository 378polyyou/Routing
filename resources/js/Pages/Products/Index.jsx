import { Link } from '@inertiajs/react';

export default function Index({ products }) {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-content">
          <Link href="/products" className="navbar-logo">My Store &#128049;</Link>
        </div>

        <Link href={route('chirps.index')} className="navbar-logo1" active={route().current('chirps.index')}>
                                             Dashboard
                                         </Link>

      </nav>
    
      <div className="product-list">
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-image">
                <img src={product.imghead} alt={product.name} />
              </div>
              <div className="product-details">
                <h2>{product.name}</h2>
                <p><strong>${product.price}</strong></p>
                <Link href={`/products/${product.id}`} className="product-link">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      <style jsx>{`
@keyframes example {
  0%   {background-color: rgb(255, 104, 104);}
  25%  {background-color: rgb(255, 101, 101);}
  50%  {background-color: rgb(255, 129, 129);}
  100% {background-color: rgb(255, 128, 128);}
  50%  {background-color: rgb(255, 129, 129);}
  25%  {background-color: rgb(255, 101, 101);}
  0%   {background-color: rgb(255, 86, 86);}
  
}

        /* Change the background color of the entire page */
        html, body {
          background-color:rgb(255, 212, 212); /* Light pink color */
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }

        /* Navbar Style */
        .navbar {
          background-color:rgb(255, 148, 148); /* Pink color */
          padding: 10px 20px;
          color: white;
          display: flex;
          justify-content: 0; /* จัดข้อความให้อยู่ตรงกลางในแนวนอน */
          align-items: center; /* จัดข้อความให้อยู่ตรงกลางในแนวตั้ง */
          height: 60px; /* ความสูงของ navbar */
          animation-name: example;
          animation-duration: 5s;
          animation-iteration-count: infinite;
          
        } 
        
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
        }

        .navbar-logo {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
           margin: 10px;
        }

        .navbar-logo1 {
        font-size: 1rem;
          color: white;
          text-decoration: none;
           margin: 10px;
        }


        .navbar-links {
          display: flex;
          gap: 20px;
        }

        .navbar-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
        }

        .navbar-link:hover {
          text-decoration: underline;
        }

        /* Page Title */
        .page-title {
          text-align: center;
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
          font-family: 'Roboto', sans-serif;
        }

        /* Product List Styles */
        .product-list {
          margin: 40px auto 0;
          padding: 40px 20px;
          max-width: 1200px;
          width: 100%;
          background-color: #fff; /* White background for the product list */
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 columns */
          gap: 20px;
        }

        .product-item {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .product-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .product-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-bottom: 2px solid #ddd;
        }

        .product-details {
          padding: 12px;
          text-align: center;
          
          
        }

        .product-details h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333;
          font-family: 'Roboto', sans-serif;
          font-weight: 100;
          
          
        }

        .product-link {
         display: inline-block; /* ใช้ inline-block เพื่อให้ปุ่มอยู่ในระดับเดียวกัน */
        padding: 10px 20px;
        background-color: rgb(81, 181, 88);
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center; /* ทำให้ข้อความอยู่กลางปุ่ม */
        }

        .product-details {
        display: flex;
        flex-direction: column; /* จัดเรียงเนื้อหาให้เป็นแนวตั้ง */
        align-items: center; /* จัดปุ่มให้ตรงกลาง */
        
        }


        .product-link:hover {
          background-color:rgb(165, 255, 170);
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}
