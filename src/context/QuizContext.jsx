import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],

  // loading, error, ready, active, finished
  status: "loading",
  currentQuestionIndex: 0,
  userAnswer: null,
  points: 0,
  highScore: 0,
  isQuizOver: false,
  secondRemaining: 10,
};

const SEC_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "DATA_FETCHED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "DATA_FAILED":
      return {
        ...state,
        status: action.payload,
      };

    case "START_QUIZ":
      return {
        ...state,
        status: action.payload,
        secondRemaining: state.questions.length * SEC_PER_QUESTION,
      };

    case "NEW_ANSWER":
      const question = state.questions.at(state.currentQuestionIndex);
      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswer: null,
      };

    case "FINISHED_QUIZ":
      const newHighscore =
        state.points > state.highScore ? state.points : state.highScore;
      return {
        ...state,
        status: "finished",
        highScore: newHighscore,
      };

    case "RESTART_QUIZ":
      return {
        ...state,
        status: "ready",
        currentQuestionIndex: 0,
        userAnswer: null,
        points: 0,
      };

    case "TICK":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

function QuizProvider({ children }) {
  //    useReducer Hook to manage the state of the quiz
  const [
    {
      questions,
      status,
      currentQuestionIndex,
      options,
      userAnswer,
      correctOption,
      points,
      highScore,
      id,
      secondRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  //    useEffect Hook to fetch the questions from the API
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return dispatch({ type: "DATA_FETCHED", payload: data });
      })
      .catch(() => {
        return dispatch({
          type: "DATA_FAILED",
          payload: `error`,
        });
      });
  }, []);

  // start quiz button
  const handleClick = () => {
    dispatch({ type: "START_QUIZ", payload: "active" });
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        currentQuestionIndex,
        options,
        userAnswer,
        correctOption,
        points,
        highScore,
        id,
        secondRemaining,
        dispatch,
        numQuestions,
        maxPossiblePoints,
        handleClick,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useQuiz must be used within a QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
