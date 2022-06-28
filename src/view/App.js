import "./App.css";
import Main from "./components/Main";
import WizardContextProvider from "../context/WizardContextProvider";

function App() {
  return (
    <div className="App">
      <WizardContextProvider>
        <Main />
      </WizardContextProvider>
    </div>
  );
}

export default App;
