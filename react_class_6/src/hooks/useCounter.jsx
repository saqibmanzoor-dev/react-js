 import { useState } from "react";

/**
 * A custom hook packages counter state and its related behavior into one
 * reusable unit. Components can use this hook without needing to know how
 * the state update is implemented.
 */
function useCounter() {
  // Each component that calls useCounter receives its own independent count.
  const [count, setCount] = useState(0);

  // Functional updates always use React's latest state value, even when
  // several updates are queued together.
  function increaseCount() {
    setCount((currentCount) => currentCount + 1);
  }

  // Expose only the state and actions that a consuming component needs.
  return { count, increaseCount };
}


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
export default useCounter;
