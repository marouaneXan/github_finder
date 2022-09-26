import React, { useContext, useEffect } from "react";
import UserRepo from "./UserRepo";
import { useParams } from "react-router-dom";
import Spinner from "../Layouts/Spinner";
import { GithubContext } from "../../context/Github";
const UserDetails = () => {
  const { login } = useParams();
  const { repos,loading, user, getUserInfo, getUserRepos } =
    useContext(GithubContext);
  useEffect(() => {
    getUserInfo(login);
    getUserRepos(login);
  }, [login]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="flex justify-center mx-auto py-[38px]">
            <div className="flex flex-col md:flex-row items-center md:space-x-[68px] p-[45px] border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
              <div className="flex flex-col items-center p space-y-6 mx-auto">
                <img
                  src={user.avatar_url}
                  className="max-w-[94.8px] max-h-[94.8px] rounded-full"
                  alt="User image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.login}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Loaction : {user.location}
                </span>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 md:px-4 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Followers: {user.followers}
                  </span>
                  <span className="bg-blue-100 md:px-4 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Following: {user.following}
                  </span>
                  <span className="bg-blue-100 md:px-4 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Public Repos: {user.public_repos}
                  </span>
                  <span className="bg-blue-100 md:px-4 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Public Gists: {user.public_gists}
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-6 p-6">
                <div>
                  <h5 className="mb-1 font-medium text-gray-900 dark:text-white">
                    Bio
                  </h5>
                  <span className="max-w-md text-sm mt-0 block text-gray-500 dark:text-gray-400">
                    {user.bio}
                  </span>
                </div>
                <a
                  href={user.html_url}
                  className="block items-center py-2 mt-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Github Profile
                </a>
                <div>
                  <p className="mb-1 font-medium text-gray-900 dark:text-white">
                    Username :{" "}
                    <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                      {user.name}
                    </span>{" "}
                  </p>
                  <p className="mb-1 font-medium text-gray-900 dark:text-white">
                    Company :{" "}
                    <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                      {user.company}
                    </span>{" "}
                  </p>
                  <p className="mb-1 font-medium text-gray-900 dark:text-white">
                    Blog :{" "}
                    <span className="text-sm mt-0 text-gray-500 dark:text-gray-400">
                      {user.blog}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto p-2 mb-5">
            <h5 className="text-white text-3xl font-semibold md:text-4xl">
              Repositories
            </h5>
            <div className="w-full flex flex-col items-center justify-center mx-auto space-y-3 mt-5">
              {repos.map((repo) => (
                <UserRepo key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserDetails;
