import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import FirebaseAuthCheck from './components/FirebaseAuthCheck';
import StartBuilding from "./components/StartBuilding";
import About from "./components/About";
import Profile from "./components/Profile";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirebaseAuthCheck />} />
          <Route path="/start-building" element={<StartBuilding />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
