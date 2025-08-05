import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const items = cart || [];
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);

  const subtotal = items.reduce((sum, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-[999]">
      {/* 👜 Cart Icon */}
      <div
        className="cursor-pointer"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
        title="View Cart"
      >
        <div className="relative">
          <FaShoppingBag className="text-xl text-gray-800" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>
      </div>

      {/* 🛍️ Cart Box */}
      {open && (
        <div
          ref={cartRef}
          className="absolute right-0 mt-3 w-[90vw] max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4 max-h-[80vh] overflow-y-auto"
        >
          {/* ❌ Close Button */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">
              🛍️ Your Cart
            </h2>
            <button onClick={() => setOpen(false)} title="Close">
              <IoMdClose className="text-xl text-gray-500 hover:text-gray-800" />
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              Your cart is empty.
            </p>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-start justify-between bg-neutral-50 border border-gray-100 rounded-md p-3 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-14 h-14 object-contain rounded-md border"
                      />
                      <div className="text-sm">
                        <h3 className="font-medium text-gray-800 line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-500">Qty: {product.quantity}</p>
                        <p className="text-gray-700 font-semibold text-sm">
                          ${product.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => {
                            dispatch(decreaseQuantity(product));
                            if (product.quantity > 1) {
                              toast.success(
                                `${product.title} quantity decreased`
                              );
                            } else {
                              toast.error("Minimum quantity is 1");
                            }
                          }}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-2 text-sm"
                        >
                          −
                        </button>
                        <span className="text-gray-700 font-semibold">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => {
                            dispatch(increaseQuantity(product));
                            toast.success(
                              `${product.title} quantity increased`
                            );
                          }}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-2 text-sm"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          dispatch(removeFromCart(product));
                          toast.success(`${product.title} removed`);
                        }}
                        className="text-gray-400 hover:text-gray-700 p-1"
                        title="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex justify-between text-sm text-gray-700 font-medium">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setOpen(false)}
                  className="mt-4 block text-center bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md py-2 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
