import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./pages/Hero/index";
import About from "./pages/About/index.tsx";
import Download from "./pages/Download";
import Login from "./pages/Login";
import Register from "./pages/Register/index";
import Sales from "./pages/Sales/index.tsx";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrequentQuestions from "./pages/FrequentQuestions.tsx";
import Innova from "./pages/About/Innova.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // or "smooth" if you want animation
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Header />

      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/frequentquestions" element={<FrequentQuestions />} />
        <Route path="/innova" element={<Innova />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
