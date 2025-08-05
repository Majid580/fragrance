import React, { useState } from "react";
import CustomerReviewSection from "./CustomerReviews";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const productImages = ["https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_1280.jpg", "https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_1280.jpg", "https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_1280.jpg", "https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085_1280.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImage = productImages[currentIndex];

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));



  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen  p-4 md:p-8 lg:p-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start bg-white rounded-3xl p-6 md:p-8 ">
         
          <div className="flex flex-col items-center space-y-6">
          
            <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <img
                key={mainImage}
                src={mainImage}
                alt="Main Product"
                className="w-full h-full object-contain p-4 transition-all duration-300 hover:scale-105"
              />

        
           
           
            </div>

            <div className="flex gap-3 justify-center w-full overflow-x-auto py-2 px-1">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentIndex === index 
                      ? "ring-2 ring-gold scale-105 shadow-md" 
                      : "opacity-80 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

         
          <div className="space-y-6">
            
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">STARLIGHT</h1>
              <p className="text-2xl text-gold font-semibold mb-2">Rs. 4,990.00</p>
              <p className="text-sm text-gray-500">SKU: 000000FRL083</p>
            </div>

            
            <div className="flex items-center gap-4 py-4">
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
                <button
                  onClick={decreaseQuantity}
                  className="text-gray-600 hover:text-gold w-6 h-6 flex items-center justify-center transition"
                >
                  −
                </button>
                <span className="mx-4 text-lg font-medium">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="text-gray-600 hover:text-gold w-6 h-6 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-black text-gold hover:bg-gold hover:text-black transition-colors duration-300 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg">
                ADD TO BAG
              </button>
            </div>

            
            <div className="space-y-5 text-sm leading-relaxed text-gray-700">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">PRODUCT DETAILS</h2>
                <p>For a refreshing floral statement, immerse yourself in our Starlight Sapphire scent.</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Composition:</h3>
                <ul className="space-y-2 ml-1">
                  <li className="flex">
                    <span className="text-gold mr-2">•</span>
                    <span><strong className="text-gray-900">Top Notes:</strong> Citrus, Floral, Fruity</span>
                  </li>
                  <li className="flex">
                    <span className="text-gold mr-2">•</span>
                    <span><strong className="text-gray-900">Middle Notes:</strong> Floral, Woody</span>
                  </li>
                  <li className="flex">
                    <span className="text-gold mr-2">•</span>
                    <span><strong className="text-gray-900">Base Notes:</strong> Ambery, Floral, Sweet</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Type:</h3>
                  <p>Floral</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Size:</h3>
                  <p>75 ml</p>
                </div>
              </div>
            </div>

            
           <div className="pt-4">
  <h3 className="text-sm font-medium text-gray-900 mb-2">SHARE THIS PRODUCT</h3>
  <div className="flex gap-3">
  <a 
    href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      fill="currentColor" 
      className="w-6 h-6"
    >
      <path d="M16.003 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.618 4.647 1.79 6.667l-1.892 6.93 7.096-1.867a13.253 13.253 0 006.34 1.603h.001c7.364 0 13.333-5.969 13.333-13.333 0-3.552-1.383-6.895-3.897-9.407A13.2 13.2 0 0016.003 2.667zm.023 23.99a11.298 11.298 0 01-5.794-1.607l-.417-.247-4.21 1.11 1.122-4.105-.27-.43a11.297 11.297 0 01-1.75-6.017c0-6.222 5.068-11.29 11.29-11.29a11.213 11.213 0 017.999 3.316 11.222 11.222 0 013.292 7.975c0 6.222-5.067 11.29-11.29 11.29zm6.19-8.471c-.341-.17-2.018-1-2.33-1.113-.311-.114-.538-.17-.765.17-.228.34-.878 1.113-1.077 1.341-.198.227-.396.256-.737.085s-1.439-.529-2.74-1.688c-1.013-.903-1.697-2.017-1.896-2.356-.198-.34-.021-.522.15-.692.154-.153.34-.398.512-.597.17-.199.227-.34.34-.568.114-.227.057-.426-.028-.597-.085-.17-.765-1.842-1.05-2.527-.276-.664-.558-.574-.765-.585-.198-.01-.426-.012-.654-.012s-.597.085-.911.426c-.313.34-1.196 1.17-1.196 2.85 0 1.68 1.225 3.301 1.396 3.531.17.227 2.408 3.681 5.838 5.162.816.353 1.45.563 1.947.72.817.26 1.56.223 2.146.136.654-.098 2.018-.825 2.305-1.621.284-.797.284-1.48.199-1.621-.085-.14-.312-.228-.654-.398z"/>
    </svg>
  </a>
</div>

</div>

          </div>
        </div>
      </div>

     
      <style jsx>{`
        .text-gold {
          color: #d4af37;
        }
        .bg-gold {
          background-color: #d4af37;
        }
        .ring-gold {
          --tw-ring-color: #d4af37;
        }
      `}</style>
      <CustomerReviewSection/>
    </div>
  );
};

export default ProductDetail;