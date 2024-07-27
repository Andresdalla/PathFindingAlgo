import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
