import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, currentQuestionIndex, numQuestions, userAnswer } =
    useQuiz();

  if (userAnswer === null) return null;

  if (currentQuestionIndex < numQuestions - 1)
    return (
      <button
        type="button"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        className="button "
      >
        Next
      </button>
    );

  if (currentQuestionIndex >= numQuestions - 1)
    return (
      <button
        type="button"
        onClick={() => dispatch({ type: "FINISHED_QUIZ" })}
        className="button "
      >
        Finish
      </button>
    );
}
export default NextButton;
