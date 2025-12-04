import React from "react";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img
          src={skill.thumbnail}
          alt={skill.skillName}
          className="h-52 w-full object-cover overflow-hidden"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{skill.skillName}</h3>
        <p className="text-sm text-gray-600">
          {skill.category} • {skill.providerName}
        </p>
        <div className="flex justify-between items-center">
          <div>⭐ {skill.rating}</div>
          <div>৳ {skill.price}</div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/skill/${skill.skillId}`}
            className="btn btn-sm btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
