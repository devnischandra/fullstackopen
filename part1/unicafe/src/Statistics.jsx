import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad }) {
  const calcAverage = (good, neutral, bad) => {
    const all = good + neutral + bad;
    return (good * 1 + neutral * 0 + bad * -1) / all;
  };

  const calcPercentage = (good, neutral, bad) => {
    const all = good + neutral + bad;
    return (good / all) * 100 + "%";
  };

  return (
    <>
      <table>
        <thead>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={calcAverage(good, neutral, bad)}
          />
          <StatisticLine
            text="positive"
            value={calcPercentage(good, neutral, bad)}
          />
        </thead>
      </table>
    </>
  );
}

export default Statistics;
