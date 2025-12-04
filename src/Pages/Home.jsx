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
    <div>
      <title>SkillHive - Home</title>
      <Suspense fallback={<LoadingPage />}>
        <section>
          <Hero />
        </section>

        <section className="mb-10 py-16 sm:py-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-2">
              🔥 Most Popular Skills
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-500 mb-10">
              Level Up Your Career with Today’s Most In-Demand Skills
            </p>
          </div>
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
