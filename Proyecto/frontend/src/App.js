import './App.css';
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import PreguntaComponent from './components/PreguntaComponent';
import PruebaBasicoComponent from './components/PruebaBasicoComponent'
import PruebaIntermedioComponent from './components/PruebaIntermedioComponent'
import PruebaAvanzadoComponent from './components/PruebaAvanzadoComponent'
import CrearPreguntaComponent from './components/CrearPreguntaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/" element={<PreguntaComponent/>} />
          <Route path="/nueva-pregunta" element={<CrearPreguntaComponent />} />
          <Route path="/prueba/basico" element={<PruebaBasicoComponent />} />
          <Route path="/prueba/intermedio" element={<PruebaIntermedioComponent />} />
          <Route path="/prueba/avanzado" element={<PruebaAvanzadoComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
