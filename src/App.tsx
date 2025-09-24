import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero/index";
import About from "./pages/About";
import Download from "./pages/Download";
import Login from "./pages/Login";
import Register from "./pages/Register/index";
import Sales from "./pages/Sales/index.tsx";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrequentQuestions from "./pages/FrequentQuestions.tsx";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/frequentquestions" element={<FrequentQuestions />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
