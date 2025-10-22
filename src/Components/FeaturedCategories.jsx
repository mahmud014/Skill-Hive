import React from "react";
import {
  FaCode,
  FaMusic,
  FaPaintBrush,
  FaLaptopCode,
  FaLanguage,
} from "react-icons/fa";

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            Explore Skill Categories
          </h2>
          <p className="text-gray-500 mt-2">
            Browse and discover skills that interest you the most. Learn from
            local experts or online mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Manual cards, no map */}
          <div className="card bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="flex justify-center items-center text-4xl mb-4 text-indigo-500">
              <FaCode />
            </div>
            <h3 className="font-bold text-lg">Programming & Coding</h3>
          </div>

          <div className="card bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 text-center">
            <div className=" flex justify-center items-center text-4xl mb-4 text-green-500">
              <FaMusic />
            </div>
            <h3 className="font-bold text-lg">Music & Instruments</h3>
          </div>

          <div className="card bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="flex justify-center items-center text-4xl mb-4 text-pink-500">
              <FaPaintBrush />
            </div>
            <h3 className="font-bold text-lg">Arts & Design</h3>
          </div>

          <div className="card bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="flex justify-center items-center text-4xl mb-4 text-purple-500">
              <FaLaptopCode />
            </div>
            <h3 className="font-bold text-lg">Web & App Development</h3>
          </div>

          <div className="card bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 text-center">
            <div className="flex justify-center items-center text-4xl mb-4 text-yellow-500">
              <FaLanguage />
            </div>
            <h3 className="font-bold text-lg">Languages & Communication</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
