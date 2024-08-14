import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Footer() {
  const { dispatch, secondRemaining } = useQuiz();

  //    useEffect Hook to manage the timer

  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <footer>
      <div className="timer">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    </footer>
  );
}
export default Footer;
