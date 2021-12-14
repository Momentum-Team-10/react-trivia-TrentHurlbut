import CategoryButton from "./components/CategoryButton";
import React, { useState } from 'react';
import QuestionsScreen from "./components/QuestionsScreen";

function TriviaGame() {
  
  const [gameStart, setGameStart] = useState(true);
  const [buttonScreen, setButtonScreen] = useState(true);
  const [category, setCategory] = useState(0);
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const incrementTotal = () => {
    setTotal(total + 1);
  }
 
  let toQuestion = (category) => {
    setCategory(category);
    setButtonScreen(false);
  }

  let toCategories = () => {
    setButtonScreen(true);
  }

  if (gameStart) {
    let usedRequests = [];
  
    for (let i = 0; i < 6; i++){
      let randomizer = Math.floor(Math.random() * 23)
      while (usedRequests.includes(randomizer)) {
        randomizer = Math.floor(Math.random() * 23)
      }
  
      categoryButtons.push(<CategoryButton
        key={randomizer + 9}
        searchkey={randomizer + 9}
        clickFunction={() => {
          toQuestion(randomizer + 9)
        }} />);
      usedRequests.push(randomizer);
    }
    setGameStart(false);
    return categoryButtons;
  }

  return (buttonScreen ? (
      <>
      {total === 0 && <h1>Welcome to 8-bit Trivia!</h1>}
      <div className="button-screen">
      {categoryButtons}
      </div>
      {total === 0 && <h3>Pick a Category to Begin.</h3>}
      {total > 0 && <h3>Score: {score} / {total}</h3>}
      </>
      )
    :
    < QuestionsScreen
      clickFunction={toCategories}
      category={category}
      passedScore={score}
      passedTotal={total}
      incrementScore={incrementScore}
      incrementTotal={incrementTotal} />
  )
};

export default TriviaGame;
