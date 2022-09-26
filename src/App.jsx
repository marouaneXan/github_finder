import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
