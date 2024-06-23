import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <div className={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
