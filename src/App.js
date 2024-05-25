import { Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Browse from './pages/Browse';
import Offer from "./pages/Offer"; 
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
