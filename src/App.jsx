import { useState, useEffect } from "react";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(
    () => Number(localStorage.getItem("good")) || 0
  );
  const [neutral, setNeutral] = useState(
    () => Number(localStorage.getItem("neutral")) || 0
  );
  const [bad, setBad] = useState(
    () => Number(localStorage.getItem("bad")) || 0
  );

  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

  const handleChange = (type) => {
    if (type === "good") setGood((prev) => prev + 1);
    else if (type === "neutral") setNeutral((prev) => prev + 1);
    else if (type === "bad") setBad((prev) => prev + 1);
    else if (type === "reset") {
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
  };

  const total = good + neutral + bad;
  const positive = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <>
      <Description />
      <Options handleChange={handleChange} total={total} />
      {total > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </>
  );
}

export default App;
