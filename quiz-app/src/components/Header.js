import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  const history = useHistory();

  return (
    <header>
      <nav>
        <button onClick={() => history.push("/quiz")}>Quiz</button>
        <button onClick={() => history.push("/notes")}>Notes</button>
        <button onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
