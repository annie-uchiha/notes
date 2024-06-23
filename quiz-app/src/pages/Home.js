import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <button onClick={() => history.push("/quiz")}>Take the quiz now</button>
    </div>
  );
};

export default Home;
