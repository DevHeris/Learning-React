export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;

  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed${" "}
          ${numPacked} (${((numPacked / numItems) * 100).toFixed(0)}
          %)`}
      </em>
    </footer>
  );
}
