import './App.css';
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import PreguntaComponent from './components/PreguntaComponent';
import PruebaComponent from './components/PruebaComponent'
import CrearPreguntaComponent from './components/CrearPreguntaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/" element={<PreguntaComponent/>} />
          <Route path="/nueva-pregunta" element={<CrearPreguntaComponent />} />
          <Route path="/prueba" element={<PruebaComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
