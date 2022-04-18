
import './App.css';

import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Pages/Home';
import Comida from './components/Pages/Comida';

import Formulario from './components/Pages/Formulario';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurantes" element={<Comida />} /> 
        <Route path="formulario" element={<Formulario />} /> 
      </Routes>
    </Router>
   
  );
}

export default App;
