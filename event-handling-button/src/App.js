import "./App.css";

function App() {
  const showAlert = (msg) => {
    alert(msg);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onMouseOver={() => showAlert("Thank you very much")} style={{ backgroundColor: "green" }}>I will subscribe</button>
      <button onMouseOver={() => showAlert("Please reconsider your decision")} style={{ backgroundColor: "red" }}>I won't subscribe</button>
    </div>
  );
}

export default App;
