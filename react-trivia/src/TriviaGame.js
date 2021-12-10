import CategoryButton from "./components/CategoryButton";
import React, { useState } from 'react';
import QuestionsScreen from "./components/QuestionsScreen";

function TriviaGame() {
  
  const [gameStart, setGameStart] = useState(true);
  const [buttonScreen, setButtonScreen] = useState(true);
  const [category, setCategory] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  let categoryButtons = [];

  let toQuestion = (category) => {
    setCategory(category);
    setButtonScreen(false)
  };

  let toCategories = () => {
    setButtonScreen(true)
  };

  if (gameStart) {
    let usedRequests = [];
  
    for (let i = 0; i < 6; i++){
      let randomizer = Math.floor(Math.random() * 23)
      while (usedRequests.includes(randomizer)) {
        randomizer = Math.floor(Math.random() * 23)
      }
  
      categoryButtons.push(<CategoryButton key={randomizer + 9} searchkey={randomizer + 9} clickFunction={() => {
        toQuestion(randomizer + 9);
        setGameStart(false);
      }} />);
      usedRequests.push(randomizer);
    }
    return categoryButtons;
  };

  return (buttonScreen && gameStart ? (
      <>
      <h1>Welcome to 8-bit Trivia!</h1>
      <div className="button-screen">
      {categoryButtons}
      </div>
      <h3>Pick a Category to Begin.</h3>
      </>
      )
    : buttonScreen ? (
      <>
      <div className="button-screen">
      {categoryButtons}
      </div>
      <h3>Score: {score} / {total} </h3>
      </>
      )
      : < QuestionsScreen
        clickFunction={toCategories}
        ategory={category}
        passedScore={score}
        passedTotal={total} />
  )
};

export default TriviaGame;
