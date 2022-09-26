import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubContextProvider from "./context/Github";
import Navbar from "./components/Layouts/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <GithubContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </GithubContextProvider>
  );
}

export default App;
