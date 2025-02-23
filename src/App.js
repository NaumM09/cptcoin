import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import Hero from "./components/hero";
import Support from "./components/support";
import Roadmap from "./components/roadmap";
import Tokenomics from "./components/tokenomics";
import Footer from "./components/footer";
import Whitepaper from "./pages/whitepaper"; // Import Whitepaper Page
import "./App.css";
import Gallery from "./components/gallery";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <Hero />
            <Support />
            <Roadmap />
            <Tokenomics />
            <Gallery/>
            <Footer />
          </div>
        } />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
};

export default App;
