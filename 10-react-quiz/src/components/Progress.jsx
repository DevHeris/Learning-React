function Progress({
  maxPossiblePoints,
  quesIndex,
  totalQuestions,
  points,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        // what happens here in the value below is actually a cool trick
        value={quesIndex + Number(answer !== null)}
        max={totalQuestions}
      />
      <p>
        <strong>{quesIndex + 1}</strong>/ {totalQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
