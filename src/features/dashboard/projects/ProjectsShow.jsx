import { useState } from "react";
import { useGetProjects } from "../../../hooks/useGetProjects";
import LoadingSpinner from "../../loading/LoadingSpinner";
import SearchBar from "../ui/SearchBar";
import ProjectItem from "./ProjectItem";

export default function ProjectsShow() {
  const { projects, isGettingProjects, error } = useGetProjects();
  const [query, setQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(5); // Start by showing 5 items

  // Filter projects based on the search query, making it case-insensitive
  const filteredResults =
    !isGettingProjects && query
      ? projects?.filter((project) =>
          project?.title?.toLowerCase().includes(query.toLowerCase())
        ) || []
      : projects || [];

  // Slice results to implement "See More" pagination
  const paginatedResults = filteredResults.slice(0, itemsToShow);

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
                {isGettingProjects
                  ? "Loading"
                  : `${filteredResults.length} Results`}
              </p>
            )}
            {error && (
              <p className="text-sm text-red-500">Failed to load projects</p>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full items-start justify-center gap-2">
          {isGettingProjects ? (
            <div className="w-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : paginatedResults.length === 0 && !error ? (
            <p className="w-full text-center">No Projects Available</p>
          ) : (
            paginatedResults.map((project, idx) => (
              <ProjectItem project={project} key={idx} />
            ))
          )}
        </div>

        {/* Show "See More" button if there are more items to load */}
        {!isGettingProjects &&
          paginatedResults.length < filteredResults.length && (
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
