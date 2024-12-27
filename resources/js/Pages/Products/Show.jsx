import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ product }) {
  // สร้าง state สำหรับเก็บรูปภาพที่จะแสดง
  const [selectedImage, setSelectedImage] = useState(product.imghead);

  // ฟังก์ชันเพื่อเปลี่ยนรูปภาพเมื่อคลิก
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <Link href="/products" className="navbar-logo">My Store &#128576;</Link>
        </div>
      </nav>

      {/* Board containing product details */}
      <div className='board'>
        <div className="product-container">
          <div className="content-wrapper">
            {/* แสดงรูปภาพที่เลือก */}
            <div className="image-container">
              <img src={selectedImage} alt={product.name} className="main-img" />
            </div>

            {/* รายละเอียดสินค้าทั้งหมด */}
            <div className="details-container">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>

              <div className="additional-images">
                <h3>Additional Images:</h3>
                <ul>
                  {product.img && product.img.length > 0 && product.img.map((image, index) => (
                    <li key={index} onClick={() => handleImageClick(image)} className="thumbnail">
                      <img src={image} alt={`${product.name} - image ${index + 1}`} className="additional-img" />
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products" className="back-link">Back to All Products</Link>
            </div>
          </div>
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
        html, body {
          background-color: rgb(255, 212, 212); /* Light pink color */
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }

        .navbar {
        background-color: rgb(255, 148, 148); /* Pink color */
        padding: 10px 20px;
        color: white;
        display: flex;
        justify-content: center; /* จัดข้อความให้อยู่ตรงกลางในแนวนอน */
        align-items: center; /* จัดข้อความให้อยู่ตรงกลางในแนวตั้ง */
        height: 60px; /* ความสูงของ navbar */
        animation-name: example;
          animation-duration: 5s;
          animation-iteration-count: infinite;
        }

        .navbar-content {
        display: flex;
        justify-content: center; /* Center the contents inside navbar */
        align-items: center;
        width: 100%;
        max-width: 1200px;
        }

        .navbar-logo {
        font-size: 2rem;
        font-weight: bold;
        color: white;
        text-decoration: none;
        }



        .board {
          margin: 40px auto 0;
          padding: 40px 20px;
          max-width: 1200px;
          width: 100%;
          background-color: #fff; /* White background for the product list */
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .product-container {
          font-family: Arial, sans-serif;
          margin: 0 auto;
          padding: 20px;
        }

        .content-wrapper {
          display: flex;
          flex-direction: row;
          gap: 40px; /* เพิ่มระยะห่างระหว่างภาพและเนื้อหา */
        }

        .image-container {
          flex: 1;
        }

        
        .main-img {
          width: 100%;
          max-width: 600px;
          height: auto;
          display: block;
          margin-top: 10px;
          margin-bottom: 20px;
          border-radius: 12px;
          
        }

        .details-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.5;
        }

        .price {
          font-size: 1.4rem;
          font-weight: bold;
          color: #2c3e50;
        }

        .additional-images ul {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .additional-img {
          width: 80px;
          height: auto;
          border: 2px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
        }

        .additional-img:hover{
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .thumbnail:hover .additional-img {
          opacity: 0.8;
        }

        .back-link {
        display: flex;  /* ใช้ flexbox เพื่อจัดตำแหน่ง */
        justify-content: center;  /* จัดข้อความให้อยู่กลางในแนวนอน */
        align-items: center;  /* จัดข้อความให้อยู่กลางในแนวตั้ง */
        margin: 20px 0px;
        padding: 0;  /* ลบ padding เดิม */
        background-color: rgb(81, 181, 88);
        color: white;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
        width: 200px;
        height: 50px;
        }


        .back-link:hover {
          background-color: rgb(165, 255, 170);
        }
      `}</style>
    </div>
  );
}
