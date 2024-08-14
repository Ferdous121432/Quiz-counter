import { useQuiz } from "../context/QuizContext";
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBarr() {
  const {
    currentQuestionIndex,
    numQuestions,
    points,
    maxPossiblePoints,
    userAnswer,
  } = useQuiz();
  const progress =
    userAnswer === null
      ? Math.ceil((currentQuestionIndex / numQuestions) * 100)
      : Math.ceil(((currentQuestionIndex + 1) / numQuestions) * 100);
  return (
    <header className="flex flex-col w-[60%]">
      <ProgressBar completed={progress} />
      {/* <process
        max={numQuestions}
        value={currentQuestionIndex}
        className="w-[30rem] h-[1rem] text-coral-red bg-slate-50 rounded-lg"
      /> */}
      <div className="flex justify-between mt-2">
        <p>
          {currentQuestionIndex + 1}/{numQuestions}
        </p>
        <p>
          {points}/{maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}
export default ProgressBarr;
