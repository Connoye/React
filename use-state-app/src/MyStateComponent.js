import { useState } from "react";

const MyStateComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count === 0 ? 0 : count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div style={{ fontSize: "40px", fontWeight: "bold", color: "orange" }}>
        {count}
      </div>
      <button style={{ backgroundColor: "lightgreen" }} onClick={increment}>
        Increase
      </button>
      <button style={{ backgroundColor: "orange" }} onClick={decrement}>
        Decrease
      </button>
      <button style={{ backgroundColor: "lightblue" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default MyStateComponent;
