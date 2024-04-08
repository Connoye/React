import './App.css';

let newVale;
let onTextChange = (event)=>{
  newVale= event.target.value;
};

function printText(){
  alert(newVale);
}

function App() {
  return (
   <div className="App">
    <input onChange={onTextChange}/>
    <br/>
    <button onClick={printText}>
      Print
    </button>
   </div>
  );
}

export default App;
