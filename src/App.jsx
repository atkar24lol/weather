import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
