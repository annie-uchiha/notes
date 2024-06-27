import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/quiz" element={<Quiz theme={theme} />} />
      </Routes>
    </div>
  );
};

export default App;
