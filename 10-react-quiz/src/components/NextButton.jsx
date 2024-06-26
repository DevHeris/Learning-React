import { useQuiz } from "../hooks/useQuiz";

function NextQuestion() {
  const { dispatch, answer, quesIndex, totalQuestions } = useQuiz();
  if (answer === null) return;
  if (quesIndex < totalQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (quesIndex === totalQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextQuestion;
