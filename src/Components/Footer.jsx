import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 sm:p-10 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand + Contact */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">SkillHive 🐝</h2>
          <p className="mb-2 text-gray-200">
            A local platform to share and exchange skills.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Email:{" "}
            <a
              href="mailto:info@skillhive.com"
              className="underline hover:text-yellow-400"
            >
              info@skillhive.com
            </a>
          </p>
          <a
            href="#"
            className="text-yellow-400 underline mt-2 inline-block hover:text-yellow-300 text-sm sm:text-base"
          >
            Privacy Policy
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Browse Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-4 mb-4 text-lg">
            <Link
              to={"https://x.com/"}
              className="hover:text-blue-500 flex gap-2"
            >
              <FaTwitter size={24} />
              Twitter
            </Link>
            <Link
              to={"https://facebook.com/"}
              className="hover:text-blue-700 flex gap-2"
            >
              <FaFacebook size={24} />
              Facebook
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              className="hover:text-pink-500 flex gap-2"
            >
              <FaInstagram size={24} />
              Instagram
            </Link>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Get updates about new skills and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none flex-1"
            />
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} SkillHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
