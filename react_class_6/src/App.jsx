import useCounter from "./useCounter";

function App() {
  // Custom hooks let this component reuse stateful behavior with a clean API.
  const { count, increaseCount } = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
