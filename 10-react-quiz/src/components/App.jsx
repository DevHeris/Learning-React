import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  status: "loading",
  quesIndex: 0,
  answer: null,
  points: 0,
};

function reducerFunc(currState, action) {
  const question = currState.questions.at(currState.quesIndex);
  console.log(question);
  switch (action.type) {
    case "dataRecieved":
      return { ...currState, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...currState, status: "error" };
    case "start":
      return { ...currState, status: "active" };
    case "newAnswer":
      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const { questions, status, quesIndex, answer } = state;
  const totalQuestions = questions.length;

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
          <Question
            question={questions[quesIndex]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
