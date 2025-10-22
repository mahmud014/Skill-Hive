import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";
import { VscArrowLeft } from "react-icons/vsc";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "../Components/ErrorPage";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SkillDetails = () => {
  const { id } = useParams();
  const skillsData = useLoaderData();

  const [skill, setSkill] = useState({});
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const foundSkill = skillsData.find((s) => s.skillId == id);
    setSkill(foundSkill);
    setLoading(false);
  }, [id, skillsData]);

  if (loading) return <LoadingPage />;
  if (!skill) return <ErrorPage message="Skill not found." />;

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking request submitted!");
    setName("");
    setEmail("");
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="max-w-5xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover rounded"
        />
        <h1 className="text-3xl font-bold mt-4">{skill.skillName}</h1>
        <p className="text-sm text-gray-600">
          {skill.category} • Provider: {skill.providerName}
        </p>
        <p className="mt-4">{skill.description}</p>

        <div className="mt-6 p-4 border rounded">
          <h2 className="text-xl">Book Session</h2>
          <form onSubmit={handleSubmit} className="space-y-3 mt-3">
            <input
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="items-center text-center mt-5">
          <Link to={"/"} className="btn btn-primary">
            <VscArrowLeft size={24} />
            Go Back
          </Link>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SkillDetails;
