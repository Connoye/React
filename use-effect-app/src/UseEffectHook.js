import { useState, useEffect } from "react";
import Child from "./Child";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);
  const [isChild, setIsChild] = useState(false);

  const increment = () => {
    console.log("Increment is called");
    setCount(count + 1);
  };

  const updateAge = () => {
    console.log("Increment age is called");
    setAge(age + 1);
  };

  useEffect(() => {
    console.log("Fetch from database");
  }, [count, age]);


  const show = () => {
    setIsChild(true);
  };

  const hide = () => {
    setIsChild(false);
  };

  return (
    <>
      <h1>useEffect</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={updateAge}>Increment Age</button>
      <button onClick={show}>Show Child</button>
      <button onClick={hide}>Hide Child</button>
      <hr/>
      {isChild ? <Child/> : null}
    </>
  );
};

export default UseEffectHook;
