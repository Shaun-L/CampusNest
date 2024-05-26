import { Route, Routes, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Browse from './pages/Browse';
import Offer from "./pages/Offer"; 
import Profile from './pages/Profile';
import Register from "./pages/Register";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Listing from "./pages/Listing"
import "./App.css";


function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />



        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/listing/:id" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
