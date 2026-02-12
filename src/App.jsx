import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
