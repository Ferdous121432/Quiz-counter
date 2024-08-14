import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
  const { userAnswer, dispatch } = useQuiz();
  const hasAnswered = userAnswer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={userAnswer !== null}
          className={`btn btn-option ${index === userAnswer ? "answer" : ""} ${hasAnswered ? (question.correctOption === index ? "correct" : "wrong") : ""}`}
          onClick={() =>
            dispatch({
              type: "NEW_ANSWER",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
