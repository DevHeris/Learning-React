import { useQuiz } from "../hooks/useQuiz";
import Options from "./Options";

function Question() {
  const { questions, quesIndex } = useQuiz();

  const question = questions[quesIndex];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
