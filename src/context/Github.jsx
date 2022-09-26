import { createContext,useState } from "react";
import axios from "axios";
export const GithubContext = createContext(null);
const GithubContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const searchUserRepo = async () => {
    setLoading(true);
    const res = await axios(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(res.data.items);
    setLoading(false)
  };
  const values={
    searchUserRepo,
    setUsername,
    setLoading,
    users,
    setUsers,
    loading
  }
  return <GithubContext.Provider value={values}>{children}</GithubContext.Provider>;
};
export default GithubContextProvider;
