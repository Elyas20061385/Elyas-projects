import React from "react";

const Hero = () => {
  return (
    <section className="w-full mt-12">
      <div className="max-w-7xl mx-auto bg-[#BFD8CF] rounded-3xl px-6 md:px-20 py-14 flex items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Fresh Groceries Delivered to Your Doorstep
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8">
            Shop premium quality products from the comfort of your home. From
            farm-fresh produce to daily essentials, we’ve got everything you
            need.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition">
              Shop Now
            </button>

            <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-xl font-medium transition">
              View Categories
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
