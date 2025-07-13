import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";

function App() {
  const [good, setGood] = useState(() => {
    const saved = localStorage.getItem("good");
    return saved ? Number(saved) : 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const saved = localStorage.getItem("neutral");
    return saved ? Number(saved) : 0;
  });

  const [bad, setBad] = useState(() => {
    const saved = localStorage.getItem("bad");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

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

  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Description />
      <Options handleChange={handleChange} />
      {total > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positivePercentage}
        />
      ) : (
        <p>No feedback given yet.</p>
      )}
    </>
  );
}

export default App;
