import he from '../../node_modules/he/he'
import { useState } from 'react';

export default function QuestionCard({ text, correctAnswer, answers, incrementScore, incrementTotal }) {

  const [answerStatus, setAnswerStatus] = useState(null)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  };

  let newAnswers = [correctAnswer, ...answers];
  shuffleArray(newAnswers);

  return (answerStatus === null ? (
    <div className="question-card">
        <section className="nes-container is-dark">
          <section className="message-list">
            <section className="message -left black-box">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left is-dark">
                <p>{he.decode(text)}</p>
              </div>
            </section>
          </section>
        </section>
      {newAnswers.map((answer) => (<button
        type="button"
        className="nes-btn is-warning ab"
        onClick={() => {
          if (answer === correctAnswer) {
            setAnswerStatus('correct')
            incrementScore()
            incrementTotal()
          } else {
            setAnswerStatus('incorrect')
            incrementTotal()
          }
        }}>{he.decode(answer)}</button>))}
    </div>
  )
    :
    answerStatus === 'correct' ? (
      <div className="results-card">
        <section className="nes-container is-dark">
          <section className="message-list">
            <section className="message -left black-box">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left is-dark">
                <p>Correct! Great job!</p>
              </div>
            </section>
          </section>
        </section>
        <div className="icon-section">
          <i class="nes-icon coin is-large"></i>
          <i class="nes-icon coin is-large"></i>
          <i class="nes-icon coin is-large"></i>
          <i class="nes-icon coin is-large"></i>
          <i class="nes-icon coin is-large"></i>
          <i class="nes-icon coin is-large"></i>
        </div>
      </div>
    ) : (
    <div className="results-card">
      <section className="nes-container is-dark">
        <section className="message-list">
          <section className="message -left black-box">
            <i className="nes-bcrikko"></i>
            <div className="nes-balloon from-left is-dark">
                  <p>Oooohhhh... Sorry! Wrong Answer! The correct answer was {he.decode(correctAnswer)}.</p>
            </div>
          </section>
        </section>
      </section>
      <div className="icon-section">
        <i class="nes-icon close is-large"></i>
        <i class="nes-icon close is-large"></i>
        <i class="nes-icon close is-large"></i>
        <i class="nes-icon close is-large"></i>
        <i class="nes-icon close is-large"></i>
        <i class="nes-icon close is-large"></i>
      </div>
    </div>
  )
  )
}