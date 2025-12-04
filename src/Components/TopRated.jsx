import React, { use } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const topRatedPromise = fetch("/TopRated.json").then((res) => res.json());

const TopRated = () => {
  const topRatedData = use(topRatedPromise);

  return (
    <section className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-2">
          ✨ Top Rated SkillHive Mentors
        </h2>
        <p className="text-lg sm:text-xl text-center text-gray-500 mb-10">
          Learn from the best, based on verified reviews and excellent service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {topRatedData?.map((provider) => (
            <div
              key={provider.id}
              className="card w-full max-w-sm bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <figure className="relative px-10 pt-10">
                <div className="avatar mx-auto">
                  <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="badge badge-lg badge-secondary text-white font-semibold">
                    {provider.badge}
                  </div>
                </div>
              </figure>

              {/* Card Body */}
              <div className="card-body items-center text-center flex flex-col flex-1">
                <h3 className="card-title text-xl sm:text-2xl text-gray-400">
                  {provider.name}
                </h3>
                <p className="text-md sm:text-lg font-semibold text-primary mb-2">
                  {provider.skill}
                </p>

                {/* Rating & Location */}
                <div className="flex flex-col sm:flex-row justify-between w-full max-w-xs text-sm text-gray-600 border-b border-dashed pb-3 mb-3 gap-2 sm:gap-0">
                  <span className="flex items-center justify-center sm:justify-start gap-1">
                    <FaStar className="text-warning" /> {provider.rating} (
                    {provider.reviews} reviews)
                  </span>
                  <span className="flex items-center justify-center sm:justify-end gap-1">
                    <FaMapMarkerAlt className="text-info" />{" "}
                    {provider.location.split(" / ")[0]}
                  </span>
                </div>

                {/* Price & Action */}
                <div className="card-actions flex flex-col sm:flex-row justify-between w-full gap-2 sm:gap-0 mt-auto">
                  <span className="text-lg sm:text-2xl font-bold text-green-700">
                    {provider.rate}
                  </span>
                  <button className="btn btn-primary w-full sm:w-auto">
                    View Mentor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
