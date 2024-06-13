import Link from "next/link";
import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

const Checkout = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-2xl text-center my-10">Checkout</h1>
      <h2 className="mx-auto w-3/4 text-lg font-semibold mb-4">1. Delivery Details</h2>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className=" w-full bg-white rounded border border-blue-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto w-3/4">
        <label for="email" className="leading-7 text-sm text-gray-600">
          Address
        </label>  
        <textarea type="text"
            id="address"
            name="address"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label for="phone" className="leading-7 text-sm text-gray-600">
            Phone No
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label for="city" className="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        
      </div>
        <div className="mx-auto w-3/4 md:flex md:space-x-2">
        <div className="mb-4 w-full">
          <label for="state" className="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-full">
          <label for="pincode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-blue-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>


      {/* Cart Review Section */}
      <h2 className="mx-auto w-3/4 text-lg font-semibold mt-8 mb-4">2. Review Cart</h2>
      <div className=" sideCart mx-auto w-3/4 bg-blue-100 p-10">

            <ol className="list-decimal">
              {Object.keys(cart).length === 0 && <div className="flex justify-center">Cart is Empty!</div>}
              {Object.keys(cart).map((k) => {
                return (
                    <li className="my-5" key={k}>
                      <div className="item flex">
                       
                        <div className="w-1/2 text-center font-semibold">{cart[k].name}</div>
                        <div className="w-1/2 font-semibold flex justify-center items-center">
                          <CiCircleMinus
                            onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}
                            size={20}
                            className="mx-1 cursor-pointer"
                          />{" "+ cart[k].qty +" "}
                          <CiCirclePlus
                            onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}
                            size={20}
                            className="mx-1 cursor-pointer"
                          />
                        </div>
                      </div>
                    </li>
                );
              })}
            </ol>
            <span className="total font-semibold text-md flex justify-center mt-5">Sub Total: ₹{subTotal}</span>
            <div className="flex justify-center space-x-2 mt-5">
              <Link href="/">
              <button  className="flex text-white bg-blue-300 border-0 py-1 px-2 focus:outline-none hover:bg-blue-400 rounded text-lg">
                Place Order
              </button>
              </Link>
              <button
                onClick={clearCart}
                className="flex text-white bg-blue-300 border-0 py-1 px-2 focus:outline-none hover:bg-blue-400 rounded text-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
    </div>
  );
};

export default Checkout;
