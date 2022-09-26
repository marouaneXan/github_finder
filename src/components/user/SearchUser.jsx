import React,{useContext} from "react";
import { GithubContext } from "../../context/Github";

const SearchUser = () => {
  const { username, setUsername, searchUserRepo } = useContext(GithubContext);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username=="") alert("Please add a username field");
    else {
      searchUserRepo();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div className="relative w-full">
        <input
          onChange={handleChange}
          name={username}
          value={username}
          type="search"
          id="search-dropdown"
          className="block p-2.5 lg:w-[300px] z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search For users"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchUser;
