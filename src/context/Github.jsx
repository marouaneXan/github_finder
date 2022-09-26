import { createContext, useState } from "react";
import axios from "axios";
export const GithubContext = createContext(null);
const GithubContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const searchUserRepo = async () => {
    setLoading(true);

    //Search for users repos
    const res = await axios(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  //get User info
  const getUserInfo = async (login) => {
    setLoading(true);
    const res = await axios(`https://api.github.com/users/${login}`);
    setUser(res.data);
    setLoading(false);
  };

  //get user repos
  const getUserRepos = async (login) => {
    const res = await axios(
      `https://api.github.com/users/${login}/repos?per_page=8`
    );
    setRepos(res.data);
  };

  const values = {
    searchUserRepo,
    setUsername,
    setLoading,
    users,
    setUsers,
    loading,
    user,
    getUserInfo,
    getUserRepos,
    repos,
  };
  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};
export default GithubContextProvider;
