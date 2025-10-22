import React from "react";
import "animate.css";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-indigo-50 via-white to-pink-50">
      {/* Spinner */}
      <div className="relative flex justify-center items-center animate__animated animate__rotateIn animate__infinite animate__slower">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>

        <div
          className="absolute w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Text */}
      <p className="mt-8 text-xl font-semibold text-gray-700 animate__animated animate__pulse animate__infinite animate__slower">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingPage;
