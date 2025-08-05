import React, { useState } from "react";
import { Eye, ShoppingBag, Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Leather Watch",
    category: "For Him",
    price: "Rs 1,500",
    rating: 4.5,
  },
  {
    id: 2,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Handbag",
    category: "For Her",
    price: "Rs 2,200",
    rating: 5,
  },
  {
    id: 3,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Perfume",
    category: "Unisex",
    price: "Rs 999",
    rating: 4,
  },
  {
    id: 4,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Wallet",
    category: "For Him",
    price: "750",
    rating: 4.2,
  },
  {
    id: 5,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Sunglasses",
    category: "For Her",
    price: "1250",
    rating: 4.8,
  },
  {
    id: 6,
    image: "/Images/p2.jpg",
    hoverImage: "/Images/p3.jpg",
    title: "Necklace",
    category: "Unisex",
    price: 1800,
    rating: 5,
  },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const dispatch = useDispatch();

  const filteredProducts =
    selectedCategory === "All" || selectedCategory === "Top Seller"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
      {/* Filter Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setVisibleCount(4);
          }}
          className="px-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm bg-white hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
        >
          <option value="All">All</option>
          <option value="Top Seller">Top Seller</option>
          <option value="For Him">Men</option>
          <option value="For Her">Women</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="group relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative w-full aspect-[2/3] sm:aspect-[3/4] h-[24rem] sm:h-[22rem] md:h-auto overflow-hidden group-hover:scale-105 transition-transform duration-300">
              {/* Wishlist Heart */}
              <div className="absolute top-3 left-3 z-10">
                <button className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition duration-200">
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
              </div>

              {/* Main Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-[1200ms] ease-in-out"
              />

              {/* Hover Image */}
              <img
                src={product.hoverImage}
                alt={`${product.title} Hover`}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transform-gpu will-change-transform transition-all duration-[1200ms] ease-in-out"
              />

              {/* Overlay Buttons */}
              <div className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-3 right-3 flex flex-col items-center gap-2 md:hidden">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition duration-200">
                    <Eye className="w-5 h-5 text-black" />
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition duration-200"
                  >
                    <ShoppingBag className="w-5 h-5 text-black" />
                  </button>
                </div>

                <div className="hidden md:flex flex-col gap-3 items-center justify-center h-full">
                  <button className="group/button relative w-32 h-10 bg-white text-black rounded-full text-sm overflow-hidden transition-all duration-300 hover:bg-black">
                    <Eye className="w-5 h-5 absolute inset-0 m-auto transform translate-y-4 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 group-hover/button:text-white transition-all duration-300" />
                    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/button:opacity-0">
                      Quick View
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                      console.log(product);
                    }}
                    className="group/button relative w-32 h-10 bg-white text-black rounded-full text-sm overflow-hidden transition-all duration-300 hover:bg-black"
                  >
                    <ShoppingBag className="w-5 h-5 absolute inset-0 m-auto transform translate-y-4 opacity-0 group-hover/button:translate-y-0 group-hover/button:opacity-100 group-hover/button:text-white transition-all duration-300" />
                    <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/button:opacity-0">
                      Quick Shop
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 px-4 pb-4">
              <div className="flex items-start justify-between">
                <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
                  {product.title}
                </h2>
                <span className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded-full uppercase font-medium tracking-wide">
                  {product.category}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-green-600 font-bold text-sm">
                  {product.price}
                </p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                  <span>⭐</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProducts.length && (
        <div className="mt-10 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
