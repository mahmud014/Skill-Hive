import React from "react";
import { Link } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center">
          <div>
            <img
              src="https://i.ibb.co/W4FBpW99/3737258.jpg"
              alt="Not Found Illustration"
              className="w-64 opacity-90"
            />
          </div>

          <p className="text-gray-500 mb-8 max-w-md">
            Oops! The page you’re looking for doesn’t exist or has been moved.
            Please check the URL or return to the homepage.
          </p>

          <Link to="/" className="btn btn-primary text-white">
            ⬅ Back to Home
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ErrorPage;
