import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-container__title">Welcome to the Quiz App</h1>
      <button className="home-container__btn" onClick={() => navigate("/quiz")}>
        Take the quiz now
      </button>
    </div>
  );
};

export default Home;
