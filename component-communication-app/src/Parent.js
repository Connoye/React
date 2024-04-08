import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentInput, setParentInput] = useState("");
  const [childInput, setChildInput] = useState("");
  const [isChildClicked, setIsChildClicked] = useState(false);

  const parentFn = () => {
    console.log("Function in parent component is called");
  };

  const clickChildFn=()=>{
    setIsChildClicked(true);
  };

  const mouseClickChildFnUp=()=>{
    setIsChildClicked(false);
  };

  return (
    <>
      <h3>Parent Component</h3>
      <input type="text" onChange={(e) => setParentInput(e.target.value)} />
      <div>Value from child component: {childInput}</div>
      <div>
        <button onClick={clickChildFn} onMouseUp={mouseClickChildFnUp}>Call child function</button>
      </div>
      <Child
        parentInput={parentInput}
        setChildInput={setChildInput}
        parentFn={parentFn}
        isChildClicked={isChildClicked}
      />
    </>
  );
};

export default Parent;
