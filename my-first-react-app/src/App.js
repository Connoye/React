// import React from "react";
import React from "react";
import Student from "./Student";

function App() {
  //   let welcome = "Welcome to React JS - Zero to Hero Training Session";
  //   return (
  //     <>
  //       <h1 style={{color:'blue', backgroundColor:'yellow'}}>{welcome}</h1>
  //     </>
  //   );
  return (
    <>
      <Student firstName="Richie" age="25" country="UK"/>
      <Student firstName="Sammy" age="35" country="USA"/>
      <Student firstName="Kimmy" age="29" country="Canada"/>
    </>
  );
}

export default App;
