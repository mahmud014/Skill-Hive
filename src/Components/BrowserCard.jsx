import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const BrowserCard = ({ skill }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={skill.image}
          alt={skill.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="flex justify-between items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            {skill.category}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
            {skill.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-1 hover:text-blue-600 transition-colors">
          {skill.title}
        </h3>

        {/* Mentor & Rating */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">{skill.mentor}</span> •{" "}
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {skill.rating} (
            {skill.reviews} reviews)
          </span>
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500 mb-4">
          {skill.distance > 0
            ? `📍 ${skill.location} (${skill.distance} km away)`
            : "📍 Online Sessions Only"}
        </p>

        {/* Price & Action */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">
            {skill.price}
          </span>
          <Link className="btn btn-sm btn-primary hover:scale-105 transform transition-transform">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowserCard;
