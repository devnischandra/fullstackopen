import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = (prev) => {
    const newValue = prev + 1;
    setGood(newValue);
  };

  const handleNeutral = (prev) => {
    const newValue = prev + 1;
    setNeutral(newValue);
  };

  const handleBad = (prev) => {
    const newValue = prev + 1;
    setBad(newValue);
  };

  return (
    <>
      <Header heading="give feedback" />
      <Button name="good" onClick={() => handleGood(good)} />
      <Button name="neutral" onClick={() => handleNeutral(neutral)} />
      <Button name="bad" onClick={() => handleBad(bad)} />
      <Header heading="statistics" />
      {good + bad + neutral === 0 ? (
        <p>No feedback given.</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </>
  );
};

export default App;
