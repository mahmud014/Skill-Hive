import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../Components/SkillCard";

const Home = () => {
  const skillsData = useLoaderData();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, [skillsData]);
  return (
    <div>
      <section className="mb-8">
        <div className="hero bg-base-200 p-8 rounded-lg">
          <div>
            <h1 className="text-4xl font-bold">
              SkillHive 🐝 — Learn and Share Skills
            </h1>
            <p className="mt-2">
              A local platform to share and exchange skills with others.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4">Post or find a skill</div>
          <div className="card p-4">Chat & schedule</div>
          <div className="card p-4">Rate after session</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
