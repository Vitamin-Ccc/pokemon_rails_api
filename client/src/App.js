import './App.css';
import { Route, Routes } from "react-router-dom";
import Pokemons from './components/Pokemons';
import About from "./components/About";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
