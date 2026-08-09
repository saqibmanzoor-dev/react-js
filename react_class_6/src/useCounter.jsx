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

export default useCounter;
