import './App.css';
import Header from "./Header"; 
import Welcome from "./Welcome";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <div className="main-component">
      <Header />
      <div className="second-form">
      <Welcome />
      <CreateAccount />
      </div>
    </div>
  );
}

export default App;
