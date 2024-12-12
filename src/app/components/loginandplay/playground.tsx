import { useLocation } from 'react-router-dom';
import './styles/playground.css';
import { mockdata } from '../../apiservices/mockdata';
import { useState } from 'react';
import { getOptionKey } from '../../global/optionLabel';
import ReactPlayer from 'react-player';

const PlayGround: React.FC = () => {
  const location = useLocation();
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectRadio, setSelectedRadio] = useState<string | number>(0);

  const mockedData: GameAskQuestion = mockdata;
  console.log('mockedData=>', mockedData);
  const { quizzes } = mockdata;

  const { gameId, nickname } = location.state;
  console.log('Hello ', gameId, ' and ', nickname);
  const currentQuiz = quizzes[currentQuizIndex];
  // Handle next button
  const handleNextQuiz = () => {
    if (quizzes.length && quizzes.length - 1 > currentQuizIndex) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      console.log('Question has been exhausted');
    }
  };
  return (
    <div className="playground-container">
      <div className="playground-card">
        <div className="task-bar">
          <div className="timer"></div>
          <div className="player-name">{nickname}</div>
          <div className="game-id">{gameId}</div>
        </div>

        {currentQuiz.quizVideo && (
          <div className="video-play">
            <ReactPlayer
              controls
              url={currentQuiz.quizVideo}
              width="90%"
              height="auto"
            >
              Your browser does not support the video tag.
            </ReactPlayer>
          </div>
        )}
        {currentQuiz.quizImage && (
          <div className="image-display">
            <img
              src={currentQuiz.quizImage}
              alt="media-content"
              className="image"
            />
          </div>
        )}
        <div className="text-question">{currentQuiz.quizMessage}</div>
        <div className="option-answer">
          {currentQuiz.options.map((option, index) =>
            currentQuiz.optionType === 'single' ? (
              <div key={index} className="option-item">
                <input
                  className="option-hook"
                  type="radio"
                  id={`${option.optionId}`}
                  name={`${option.optionId}`}
                  value={option.answerText}
                  checked={selectRadio === option.optionId}
                  onChange={() => setSelectedRadio(option.optionId)}
                />
                <div className="option-name">{option.answerText}</div>
              </div>
            ) : (
              currentQuiz.optionType === 'multiple' && (
                <div key={index} className="option-item">
                  <input
                    type="checkbox"
                    id={`${option.optionId}`}
                    name="option-checkgroup"
                    value={option.answerText}
                    className="option-hook"
                    //   onChange={() => setSelectedRadio(option.optionId)}
                  />
                  <div className="option-name">{option.answerText}</div>
                </div>
              )
            )
          )}
        </div>
        <div className="button-navigate">
          <button className="transparent-button next" onClick={handleNextQuiz}>
            Next
          </button>
          <button className="transparent-button submit-and-close">
            Submit & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
