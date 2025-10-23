import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle, FaEdit, FaEnvelope } from "react-icons/fa";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("🎉 Profile Updated Successfully!");
        setName("");
        setPhoto("");
      })
      .catch((error) => {
        toast.error(error.code);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-10">
      <div className="card w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="relative h-40 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <FaUserCircle className="w-24 h-24 text-gray-300" />
            )}
          </div>
        </div>

        {/* User Info Section */}
        <div className="mt-16 text-center px-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <FaEdit className="text-primary" />
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500 flex items-center justify-center gap-2 mt-1">
            <FaEnvelope className="text-gray-400" />
            {user?.email}
          </p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-3">
            Edit Profile
          </h3>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo URL"
              className="input input-bordered w-full outline-none"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full mt-3 ${
              loading ? "loading" : ""
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
