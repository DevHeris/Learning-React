import { useQuiz } from "../hooks/useQuiz";

function Options() {
  const { questions, quesIndex, dispatch, answer } = useQuiz();

  const question = questions[quesIndex];

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
