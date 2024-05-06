import { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  quesIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

function reducerFunc(currState, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...currState, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...currState, status: "error" };
    case "start":
      return {
        ...currState,
        status: "active",
        secondsRemaining: currState.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = currState.questions.at(currState.quesIndex);
      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };
    }
    case "nextQuestion":
      return { ...currState, quesIndex: currState.quesIndex + 1, answer: null };
    case "finish":
      return {
        ...currState,
        status: "finished",
        highscore:
          currState.points > currState.highscore
            ? currState.points
            : currState.highscore,
      };
    case "restartQuiz":
      return {
        ...initialState,
        status: "ready",
        questions: currState.questions,
      };
    case "tick":
      return {
        ...currState,
        secondsRemaining: currState.secondsRemaining - 1,
        status:
          currState.secondsRemaining === 0 ? "finished" : currState.status,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const {
    questions,
    status,
    quesIndex,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const totalQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3000/questions/");

        if (!resp.ok) throw new Error("Failed to fetch questions");

        const data = await resp.json();

        dispatch({ type: "dataRecieved", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        quesIndex,
        answer,
        points,
        highscore,
        secondsRemaining,
        totalQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext, QuizProvider };
