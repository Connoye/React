import { useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const onSubmit = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log("Component is rendered");
  });

  return (
    <>
      <h1>UseRef</h1>
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <hr />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default UseRef;
