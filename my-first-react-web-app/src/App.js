import "./App.css";
import FooterComponents from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import TopbarComponent from "./TopbarComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <TopbarComponent />
      <MainComponent />
      <FooterComponents />
    </div>
  );
}

export default App;
