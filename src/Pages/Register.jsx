import React, { useState, use } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUser, loginWithGoogle } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name shuld be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 6 characters and strong.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account created successfully!");
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            toast.error(error.code);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
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
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
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
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
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
              className="checkbox mr-2"
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
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-google flex justify-center items-center gap-2 btn-outline w-full"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
        <p className="text-center text-sm mt-6 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/dashboard/login"
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
