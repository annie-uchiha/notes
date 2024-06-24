import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = ({ toggleTheme, theme }) => {
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className={`header ${theme}`}>
      <nav className="nav">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/quiz")}>Quiz</button>
        <button onClick={() => navigate("/notes")}>Notes</button>
        <button className="theme-toggle" onClick={handleThemeToggle}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
