import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Paragraph from "./Paragraph";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const arrayLength = anecdotes.length;
  const [vote, setVote] = useState(new Uint8Array(arrayLength));
  const [selected, setSelected] = useState(0);
  const [maxVote, setMaxVote] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const handleNext = () => {
    const newSelected = Math.floor(Math.random() * arrayLength);
    setSelected(newSelected);
  };

  const handleVote = (selected) => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
    const newMaxVote = Math.max(...newVote);
    const newMaxIndex = newVote.indexOf(newMaxVote);
    setMaxVote(newMaxVote);
    setMaxIndex(newMaxIndex);
  };

  return (
    <>
      <Header text="Anecdote of the day" />
      <Paragraph text={anecdotes[selected]} />
      <Paragraph text={"has " + vote[selected] + " votes"} />
      <Button onClick={() => handleVote(selected)} text="vote" />
      <Button onClick={handleNext} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      {vote[maxIndex] === 0 ? (
        <Paragraph text="Please start voting..." />
      ) : (
        <>
          <Paragraph text={anecdotes[maxIndex]} />
          <Paragraph text={"has " + vote[maxIndex] + " votes"} />
        </>
      )}
    </>
  );
};

export default App;
