import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 animate__animated animate__fadeInUp">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mt-2">
            Login to continue to{" "}
            <span className="font-semibold">SkillHive</span>
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {show ? <FaEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          <div className="flex text-sm">
            <Link to="/forgot-password" className="link link-primary">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Login
          </button>
          <p>
            Don't have an Account? Please{" "}
            <Link to={"/dasboard/register"}>
              <span className="link link-primary">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
