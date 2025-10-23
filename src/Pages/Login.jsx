import React, { use, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const { singIn, setUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

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

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            {/* Email */}
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

          <div>
            {/* password */}
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full outline-none"
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
          {error && <p className="text-red-500">{error}</p>}
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
