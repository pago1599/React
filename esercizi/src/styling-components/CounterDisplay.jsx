export function CounterDisplay({ count }) {
  const counterDisplayStyle = {
    fontSize: "30px",
    color: "blue",
  };
  return (
    <div style={counterDisplayStyle}>
      <h2>{count}</h2>
    </div>
  );
}
