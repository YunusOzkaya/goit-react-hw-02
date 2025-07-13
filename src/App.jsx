import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    } else if (type === "reset") {
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
  };

  return (
    <>
      <Description />
      <Options handleChange={handleChange} />
      {good + bad + neutral > 0 ? (
        <Feedback good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given yet.</p>
      )}
    </>
  );
}

export default App;
