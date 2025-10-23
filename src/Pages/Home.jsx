import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";
import Hero from "../Components/Hero";
import LoadingPage from "../Components/LoadingPage";
import TopRated from "../Components/TopRated";
import HowItWorks from "../Components/HowItWorks";
import FeaturedCategories from "../Components/FeaturedCategories";

const Home = () => {
  const skillsData = useLoaderData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, [skillsData]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <title>SkillHive - Home</title>
      <Suspense fallback={<LoadingPage />}>
        <section className="mb-8">
          <Hero />
        </section>

        <section>
          <h2 className="max-w-7xl mx-auto text-2xl sm:text-3xl font-semibold my-8 sm:my-10  text-left">
            Popular Skills
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <TopRated />
        </section>

        <section className="mt-8">
          <HowItWorks />
        </section>
        <section>
          <FeaturedCategories />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
