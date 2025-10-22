import React, { useState, use } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="card w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 animate__animated animate__fadeInUp">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Create Account 🐝
          </h2>
          <p className="text-gray-500 mt-2">
            Join <span className="font-semibold">SkillHive</span> and start
            learning!
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered input-primary w-full outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full outline-none"
              required
            />
          </div>
          {/* Photo-URL */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="input input-bordered input-primary w-full outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className="input input-bordered input-primary w-full outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="terms"
              className="checkbox checkbox-primary mr-2"
              required
            />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the <span className="link link-primary">Terms</span> &{" "}
              <span className="link link-primary">Privacy Policy</span>.
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/dasboard/login"
            className="link link-primary font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
