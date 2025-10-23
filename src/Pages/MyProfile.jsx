import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile Updated");
        setName("");
        setPhoto("");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };
  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <h2 className="text-2xl">My Profile</h2>
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {user?.displayName}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <img
          src={user?.photoURL}
          alt="avatar"
          className="w-24 h-24 rounded mt-2"
        />
      </div>

      <form onSubmit={handleUpdate} className="mt-4 space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
