// App.jsx
import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Gallery from "./components/pages/Gallery";
import Music from "./components/pages/Music";
import Art from "./components/pages/Art";
import Home from "./components/pages/Home";
import Gigs from "./components/pages/Gigs";



function App() {
  return (
    <Router>
      <div className="flex-container">
        <div className="container">
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/art" element={<Art />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
