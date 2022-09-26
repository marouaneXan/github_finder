import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubContextProvider from "./context/Github";
import Navbar from "./components/Layouts/Navbar";
import Home from "./pages/Home";
import UserDetails from "./components/user/UserDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GithubContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:login" element={<UserDetails />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </GithubContextProvider>
  );
}

export default App;
