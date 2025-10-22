import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";
import Hero from "../Components/Hero";
import LoadingPage from "../Components/LoadingPage";
import TopRated from "../Components/TopRated";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
  const skillsData = useLoaderData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, [skillsData]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<LoadingPage />}>
        {/* Hero Section */}
        <section className="mb-8">
          <Hero />
        </section>

        {/* Popular Skills */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold my-8 sm:my-10 text-center sm:text-left">
            Popular Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        </section>

        {/* Top Rated Mentors */}
        <section className="my-12">
          <TopRated />
        </section>

        {/* How It Works */}
        <section className="mt-8">
          <HowItWorks />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
