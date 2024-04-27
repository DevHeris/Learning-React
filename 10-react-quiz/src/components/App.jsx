import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  quesIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducerFunc(currState, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...currState, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...currState, status: "error" };
    case "start":
      return { ...currState, status: "active" };
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
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const { questions, status, quesIndex, answer, points, highscore } = state;

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
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              maxPossiblePoints={maxPossiblePoints}
              points={points}
              totalQuestions={totalQuestions}
              quesIndex={quesIndex}
              answer={answer}
            />
            <Question
              question={questions[quesIndex]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              quesIndex={quesIndex}
              totalQuestions={totalQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen
              maxPossiblePoints={maxPossiblePoints}
              points={points}
              highscore={highscore}
            />
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "restartQuiz" })}
            >
              Restart Quiz
            </button>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
