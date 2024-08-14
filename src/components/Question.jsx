import { useQuiz } from "../context/QuizContext";
import Footer from "./Footer";
import NextButton from "./NextButton";
import Options from "./Options";

function Question() {
  const {
    questions,
    currentQuestionIndex,
    dispatch,
    userAnswer,
    numQuestions,
    secondRemaining,
  } = useQuiz();

  const question = questions.at(currentQuestionIndex);

  return (
    <div>
      <h4>
        {currentQuestionIndex + 1}. {question.question}
      </h4>
      <Options question={question} />
      <div className="flex justify-between items-center">
        <Footer dispatch={dispatch} secondRemaining={secondRemaining} />
        <NextButton
          currentQuestionIndex={currentQuestionIndex}
          numQuestions={numQuestions}
          userAnswer={userAnswer}
        />
      </div>
    </div>
  );
}
export default Question;
