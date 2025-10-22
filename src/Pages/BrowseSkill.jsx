import React, { useState, useEffect, useCallback } from "react";
import { useLoaderData } from "react-router";
import BrowserCard from "../Components/BrowserCard";

const BrowseSkill = () => {
  const browserData = useLoaderData();
  const [skills, setSkills] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    sortBy: "match",
  });

  // Filter and sort skills
  const filterAndSortSkills = useCallback(() => {
    if (!browserData) return;

    let filtered = browserData.filter((skill) =>
      filters.searchTerm
        ? skill.title
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          skill.mentor.toLowerCase().includes(filters.searchTerm.toLowerCase())
        : true
    );

    // Sorting
    filtered.sort((a, b) => {
      if (filters.sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    setSkills(filtered);
  }, [filters, browserData]);

  useEffect(() => {
    filterAndSortSkills();
  }, [filterAndSortSkills]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Explore Skills & Mentors
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mt-2">
          <input
            type="text"
            placeholder="Search for 'Coding', 'Guitar', 'Cooking', or 'Yoga'"
            name="searchTerm"
            value={filters.searchTerm}
            onChange={handleFilterChange}
            className="input input-bordered w-full md:w-80"
          />
          <button
            onClick={filterAndSortSkills}
            className="btn btn-primary w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </header>

      {/* Skills Grid */}
      <main>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <span className="mb-2 md:mb-0">
            Showing {skills.length} of {browserData.length} skills
          </span>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="select select-bordered w-48"
          >
            <option value="match">Best Match</option>
            <option value="rating">Highest Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {skills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <BrowserCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <h2>No skills found matching your search.</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default BrowseSkill;
