import { useQuiz } from "../context/QuizContext";

function Home() {
  const { numQuestions, handleClick } = useQuiz();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Programing Quiz</h1>
      <p className="text-[2rem]">
        Test your knowledge of programming languages
      </p>
      <p className="text-[2rem]"> Total: {numQuestions} Ques</p>
      <button
        onClick={handleClick}
        className="text-[3rem] bg-slate-200 rounded-[5px] text-slate-900 px-6 py-3 mt-10"
      >
        Start Quiz
      </button>
    </div>
  );
}
export default Home;
