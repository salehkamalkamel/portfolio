import { useState } from "react";
import { useGetSkills } from "../../../hooks/useGetSkills";
import LoadingSpinner from "../../loading/LoadingSpinner";
import SearchBar from "../ui/SearchBar";
import SkillItem from "./SkillItem";

export default function SkillsShow() {
  const { skills, isGettingSkills, error } = useGetSkills();
  const [query, setQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(5); // Start by showing 5 items

  // Filter skills based on the search query, making it case-insensitive
  const filteredSkills =
    !isGettingSkills && query
      ? skills?.filter((skill) =>
          skill?.name?.toLowerCase().includes(query.toLowerCase())
        ) || []
      : skills || [];

  // Slice results to implement "See More" pagination
  const paginatedSkills = filteredSkills.slice(0, itemsToShow);

  // Handle "See More" button click
  const handleSeeMore = () => {
    setItemsToShow((prev) => prev + 5); // Increase items by 5
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex md:mt-24 w-full sm:max-w-[60%] flex-col items-center justify-center gap-y-6">
        <SearchBar query={query} handleQuery={setQuery} />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {!error && (
              <p className="text-sm text-slate-300">
                {isGettingSkills
                  ? "Loading"
                  : `${filteredSkills.length} Results`}
              </p>
            )}
            {error && (
              <p className="text-sm text-red-500">Failed to load skills</p>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full items-start justify-center gap-2">
          {isGettingSkills ? (
            <div className="w-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : paginatedSkills.length === 0 && !error ? (
            <p className="w-full text-center">No Skills Available</p>
          ) : (
            paginatedSkills.map((skill, idx) => (
              <SkillItem skill={skill} key={idx} />
            ))
          )}
        </div>

        {/* Show "See More" button if there are more items to load */}
        {!isGettingSkills && paginatedSkills.length < filteredSkills.length && (
          <button
            onClick={handleSeeMore}
            className="mt-4 px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
}
