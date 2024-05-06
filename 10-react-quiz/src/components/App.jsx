import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import { useEffect } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../hooks/useQuiz";

function App() {
  const { dispatch, status } = useQuiz();

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
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen />
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
