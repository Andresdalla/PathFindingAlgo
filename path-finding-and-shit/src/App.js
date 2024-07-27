import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dijkstra from "./components/Dijkstra.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dijkstra" element={<Dijkstra />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
