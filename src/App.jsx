import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/Footer";
import Gallery from "./components/pages/Gallery";
import Music from "./components/pages/Music";
import Art from "./components/pages/Art";
import Home from "./components/pages/Home";
import Gigs from "./components/pages/Gigs";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/art" element={<Art />} />
          </Routes>
        </div>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
