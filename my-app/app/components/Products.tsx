import React from 'react'
import Image from 'next/image';
import { LuShoppingCart } from "react-icons/lu";

const Products = () => {
  return (
    <>
      {/* Section title */}
      <div className="w-full mt-10">
        <h1 className="text-2xl font-bold text-black mb-2 text-left">
          Our Products
        </h1>
        <p className="text-lg text-gray-500 text-left">
          Discover our wide range of fresh and premium products.
        </p>
      </div>

      {/* Product list */}
      <div className="w-full mt-6 grid grid-cols-4 gap-6">

        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p1.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p2.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p3.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p4.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white ">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 grid grid-cols-4 gap-6">

        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p9.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p10.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p11.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p12.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white ">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-6 grid grid-cols-4 gap-6">
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p5.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p6.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p7.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
        <div className="px-5 py-5 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/p8.png"
              alt="Fresh Apples"
              width={200}
              height={200}
            />
          </div>
          {/* Text */}
          <div className="mt-4 flex flex-col items-start text-left">
            <h2 className="text-lg font-semibold mb-1">
              Fresh Apples
            </h2>
          </div>
          {/* Price & Cart */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-lg text-green-600 font-bold">
              $3.99
            </p>
            <button className="cursor-pointer bg-green-800 p-2 rounded-md hover:bg-green-700 transition flex items-center space-x-2 text-white ">
              <LuShoppingCart className="w-5 h-5 text-white" />
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products;
