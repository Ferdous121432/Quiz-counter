import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Home from "./components/Home";
import Question from "./components/Question";
import ProgressBarr from "./components/ProgressBarr";
import FinishPage from "./components/FinishPage";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      {status === "active" && <ProgressBarr />}
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Home />}
        {status === "active" && <Question />}
        {status === "finished" && <FinishPage />}
      </Main>
    </div>
  );
}
export default App;
