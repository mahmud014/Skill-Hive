import React from "react";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaSeedling,
} from "react-icons/fa";

const AboutPage = () => {
  const missionText =
    "Our mission is to foster a vibrant community where passion meets knowledge, making learning accessible, personal, and reciprocal. We believe everyone has a skill to share and something new to learn.";

  return (
    <div className="min-h-screen py-16">
      <title>SkillHive - About</title>
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold text-neutral mb-4">
            Welcome to <span className="text-yellow-500">SkillHive 🐝</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SkillHive is more than just a marketplace—it's a community dedicated
            to decentralized, personalized learning and skill exchange. We
            bridge the gap between those who want to teach and those eager to
            learn.
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-primary text-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl font-light max-w-4xl mx-auto">
              {missionText}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-neutral mb-8">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-white shadow-xl p-6 text-center hover:bg-base-100 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/10">
                  <FaHandsHelping className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral mb-2">
                Reciprocity
              </h3>
              <p className="text-sm text-gray-600">
                Promoting a culture of giving and taking, encouraging both paid
                sessions and free skill-exchange (barter).
              </p>
            </div>

            <div className="card bg-white shadow-xl p-6 text-center hover:bg-base-100 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/10">
                  <FaMapMarkedAlt className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral mb-2">
                Local Focus
              </h3>
              <p className="text-sm text-gray-600">
                Connecting users with mentors and learners in their local area
                for convenient, face-to-face interactions.
              </p>
            </div>

            <div className="card bg-white shadow-xl p-6 text-center hover:bg-base-100 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/10">
                  <FaGraduationCap className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-gray-600">
                Making high-quality, personalized learning affordable and
                available to everyone, regardless of background.
              </p>
            </div>

            <div className="card bg-white shadow-xl p-6 text-center hover:bg-base-100 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-secondary/10">
                  <FaSeedling className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral mb-2">Growth</h3>
              <p className="text-sm text-gray-600">
                Providing a platform for mentors to grow their expertise and for
                learners to cultivate new passions.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="alert alert-info shadow-lg p-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h4 className="text-2xl font-bold">Ready to Explore or Share?</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button className="btn btn-sm btn-primary text-white">
                Find a Mentor
              </button>
              <button className="btn btn-sm btn-outline btn-primary text-white">
                Become a Mentor
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
