import "./App.css";
//Components
import Section from "./components/Section";

// Data
import movies from "./assets/data/movies.json";
import Logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Logo Netflix" className="logo" />
      <Section movies={movies} />
    </div>
  );
}

export default App;
