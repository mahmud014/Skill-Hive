import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";
import {
  FaStar,
  FaRegClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaUserCircle,
} from "react-icons/fa";
import LoadingPage from "../Components/LoadingPage";
import ErrorPage from "../Components/ErrorPage";

const BrowseSkillDetails = () => {
  const { id } = useParams();
  const skillsData = useLoaderData();

  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  // Booking form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Gallery state
  const [activeIdx, setActiveIdx] = useState(0);

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!skillsData) return;
    const foundSkill = skillsData.find((s) => Number(s.skillId) === Number(id));
    setSkill(foundSkill || null);
    setLoading(false);
    setActiveIdx(0);
    setOpenFaq(null);
  }, [id, skillsData]);

  if (loading) return <LoadingPage />;
  if (!skill) return <ErrorPage message="Skill not found." />;

  const gallery =
    skill.gallery && skill.gallery.length
      ? skill.gallery
      : [skill.thumbnail || skill.image];

  const prevImage = () =>
    setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const nextImage = () => setActiveIdx((i) => (i + 1) % gallery.length);

  // Booking submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking request submitted!");
    setName("");
    setEmail("");
  };

  return (
    <div className="bg-linear-to-b from-slate-50 to-white min-h-screen text-slate-800">
      {/* HERO */}
      <div className="relative w-full h-96 md:h-[520px] lg:h-[560px] overflow-hidden">
        <img
          src={skill.thumbnail || skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover transform transition duration-700 scale-100 hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end pb-10 px-6 md:px-12">
          <div className="max-w-4xl bg-linear-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl text-white/95 shadow-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-sm">
              {skill.skillName}
            </h1>
            <p className="mt-2 text-sm md:text-base opacity-90">
              {skill.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white/8 px-3 py-1.5 rounded-full">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{skill.rating}</span>
                <span className="text-xs opacity-90">
                  ({skill.totalReviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 px-3 py-1.5 rounded-full">
                <FaUserCircle />
                <span className="font-medium">
                  {skill.studentsEnrolled} students
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 px-3 py-1.5 rounded-full">
                <FaMapMarkerAlt />
                <span className="font-medium">
                  {skill.location?.type || skill.classType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top meta card (glass) */}
            <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/10 shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-600">
                    Category • {skill.category}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1">
                    {skill.skillName}
                  </h2>
                  <p className="mt-2 text-slate-700">{skill.tagline}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-emerald-600">
                      {skill.discountPrice ?? skill.price} {skill.currency}
                    </div>
                    {skill.discountPrice && (
                      <div className="text-sm text-slate-500 line-through">
                        {skill.price} {skill.currency}
                      </div>
                    )}
                    <div className="text-xs text-slate-500 mt-1">
                      Only {skill.slotsAvailable} slots left
                    </div>
                  </div>

                  <div>
                    <Link className="inline-block px-4 py-2 bg-linear-to-r from-yellow-500 to-yellow-400 text-black rounded-full shadow-lg transform transition-transform hover:-translate-y-0.5">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-column: Gallery & Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Gallery (left two cols) */}
              <div className="md:col-span-2 space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={gallery[activeIdx]}
                    alt={`gallery-${activeIdx}`}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500"
                  />
                  {/* arrows */}
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                        aria-label="previous image"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                        aria-label="next image"
                      >
                        <FaChevronRight />
                      </button>

                      {/* indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIdx(i)}
                            className={`w-2 h-2 rounded-full ${
                              i === activeIdx ? "bg-white" : "bg-white/40"
                            }`}
                            aria-label={`go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* small thumbnails */}
                <div className="flex gap-3">
                  {gallery.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`w-20 h-14 rounded-md overflow-hidden border-2 ${
                        i === activeIdx
                          ? "border-rose-400"
                          : "border-transparent"
                      } shadow-sm`}
                    >
                      <img
                        src={g}
                        alt={`thumb-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description (right col) */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow">
                  <h3 className="text-lg font-semibold">About this course</h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm">
                      {skill.level}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm">
                      {skill.language}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                      {skill.duration}
                    </div>
                  </div>
                </div>

                {/* What you'll learn */}
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow">
                  <h4 className="font-semibold text-lg">What you'll learn</h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2">
                    {skill.whatYouWillLearn?.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500">
                          <FaCheck />
                        </span>
                        <span className="text-slate-700">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements + Highlights + Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow">
                <h5 className="font-semibold">Requirements</h5>
                <ul className="mt-3 list-disc ml-5 text-slate-700">
                  {skill.requirements?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow">
                <h5 className="font-semibold">Highlights</h5>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {skill.highlights?.map((h, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-50 text-rose-600">
                        <FaCheck />
                      </div>
                      <div>{h}</div>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow">
                <h5 className="font-semibold">Schedule</h5>
                <div className="mt-3 space-y-2 text-slate-700">
                  {skill.schedule?.map((s, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaRegClock />
                      <div>
                        <div className="font-medium">{s.day}</div>
                        <div className="text-sm text-slate-600">{s.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur border border-white/10 shadow">
              <h4 className="text-xl font-semibold">
                Frequently asked questions
              </h4>
              <div className="mt-4 space-y-3">
                {skill.faq?.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="border border-slate-100 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="w-full text-left px-4 py-3 flex justify-between items-center bg-white/30"
                      >
                        <div>
                          <div className="font-medium">{f.question}</div>
                        </div>
                        <div
                          className={`transform transition-transform ${
                            open ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>

                      <div
                        className={`px-4 py-3 transition-all duration-300 ${
                          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <p className="text-slate-700">{f.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky booking + instructor */}
          <aside className="space-y-6">
            {/* Booking Card */}
            <div
              id="book"
              className="p-6 rounded-2xl bg-linear-to-br from-white/80 to-white/60 backdrop-blur border border-white/10 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Starting from</div>
                  <div className="text-2xl font-extrabold text-rose-600">
                    {skill.discountPrice ?? skill.price} {skill.currency}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Slots</div>
                  <div className="font-semibold">{skill.slotsAvailable}</div>
                </div>
              </div>

              <div className="mt-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                  <button
                    type="submit"
                    className="w-full mt-1 inline-block rounded-full px-4 py-2 bg-linear-to-r from-yellow-500 to-yellow-400 text-black font-semibold shadow-lg transform transition hover:-translate-y-0.5"
                  >
                    Request Booking
                  </button>
                </form>
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Secure your slot — instructor will contact you to confirm
                timing.
              </div>
            </div>

            {/* Instructor Card */}
            <div className="p-5 rounded-2xl bg-white/80 backdrop-blur border border-white/10 shadow">
              <div className="flex items-center gap-4">
                <img
                  src={skill.providerImage}
                  alt={skill.providerName}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <div>
                  <div className="font-semibold">{skill.providerName}</div>
                  <div className="text-sm text-slate-600">
                    {skill.providerTitle}
                  </div>
                  <a
                    href={`mailto:${skill.providerEmail}`}
                    className="text-sm text-rose-500 mt-1 inline-block"
                  >
                    {skill.providerEmail}
                  </a>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> {skill.rating} (
                  {skill.totalReviews} reviews)
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FaMapMarkerAlt /> {skill.location?.address}
                </div>
              </div>

              <div className="mt-4">
                <Link
                  to="/"
                  className="inline-block text-sm text-slate-600 underline"
                >
                  View other classes
                </Link>
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-4 rounded-xl bg-white/80 backdrop-blur border border-white/10 shadow text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <div className="font-medium">Level</div>
                <div>{skill.level}</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="font-medium">Duration</div>
                <div>{skill.duration}</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="font-medium">Language</div>
                <div>{skill.language}</div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer spacing */}
        <div className="mt-12" />
      </main>
    </div>
  );
};

export default BrowseSkillDetails;
