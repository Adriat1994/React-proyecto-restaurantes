
import './App.css';

import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Pages/Home';
import Restaurantes from './components/Pages/Restaurantes';
import Platos from './components/Pages/Platos';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurantes" element={<Restaurantes />} />       
        <Route path="platos" element={<Platos />} />  
      </Routes>
    </Router>
   
  );
}

export default App;
