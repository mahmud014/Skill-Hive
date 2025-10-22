import React from "react";
import { FaSearch, FaHandshake, FaUserFriends } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral">
            How SkillHive <span className="text-primary">Works</span>
          </h2>
          <p className="text-md sm:text-xl text-gray-500 mt-2">
            Connecting local learners and mentors in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="p-5 rounded-full mb-4 flex items-center justify-center bg-primary/10">
                <FaSearch className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title text-xl sm:text-2xl font-bold text-gray-400 mb-2">
                1. Discover Your Skill
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use powerful filters and search to find mentors teaching
                subjects like coding, music, or cooking near you or online.
              </p>
            </div>
          </div>

          <div className="card w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="p-5 rounded-full mb-4 flex items-center justify-center bg-secondary/10">
                <FaHandshake className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="card-title text-xl sm:text-2xl font-bold text-gray-400 mb-2">
                2. Arrange Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with the mentor/learner. Choose between paid
                lessons or a free skill-exchange (barter) session.
              </p>
            </div>
          </div>

          <div className="card w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="card-body items-center text-center p-6 sm:p-8">
              <div className="p-5 rounded-full mb-4 flex items-center justify-center bg-accent/10">
                <FaUserFriends className="w-8 h-8 text-accent" />
              </div>
              <h3 className="card-title text-xl sm:text-2xl font-bold text-gray-400 mb-2">
                3. Learn & Connect
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Start your personalized session, build your expertise, and join
                a vibrant community of local skill sharers.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-lg btn-primary shadow-lg">
            Start Exploring Skills Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
