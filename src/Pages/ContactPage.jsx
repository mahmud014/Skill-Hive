import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      `Thank you, ${formData.name}! We have received your message.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-neutral mb-3">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">
            Have questions, feedback, or need support? We're here to help!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card bg-white shadow-xl p-8">
            <h2 className="text-3xl font-bold text-neutral mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered input-primary w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message or Inquiry"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea textarea-bordered textarea-primary h-32 w-full"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary w-full text-white"
              >
                Submit Message
              </button>
            </form>
          </div>

          <div className="space-y-6 lg:mt-10">
            <h2 className="text-3xl font-bold text-neutral mb-6">
              Contact Information
            </h2>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Email Support</p>
                <p className="text-gray-600">info@skillhive.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
              <FaPhoneAlt className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+880 1XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-center text-neutral mb-8 flex items-center justify-center">
            <FaQuestionCircle className="mr-3 text-primary" />
            Frequently Asked Questions
          </h2>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-white rounded-box shadow-md mb-4"
          >
            <div className="collapse-title text-xl font-medium text-neutral">
              How do I sign up as a mentor?
            </div>
            <div className="collapse-content bg-base-50">
              <p className="py-3 text-gray-700">
                Click the 'Become a Mentor' button on the homepage and fill out
                your profile. Our team reviews applications within 48 hours.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-white rounded-box shadow-md mb-4"
          >
            <div className="collapse-title text-xl font-medium text-neutral">
              Is there a fee to use SkillHive?
            </div>
            <div className="collapse-content bg-base-50">
              <p className="py-3 text-gray-700">
                SkillHive is free for learners. Mentors pay a small commission
                on paid sessions, but setting up a profile and offering
                skill-exchange sessions is free.
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-white rounded-box shadow-md mb-4"
          >
            <div className="collapse-title text-xl font-medium text-neutral">
              What is 'Skill Exchange'?
            </div>
            <div className="collapse-content bg-base-50">
              <p className="py-3 text-gray-700">
                Skill Exchange is a barter system where you teach one skill in
                exchange for learning another, with no money involved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
