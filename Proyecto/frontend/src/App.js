import './App.css';
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import PreguntaComponent from './components/PreguntaComponent';
import PruebaBasicoComponent from './components/PruebaBasicoComponent'
import PruebaIntermedioComponent from './components/PruebaIntermedioComponent'
import PruebaAvanzadoComponent from './components/PruebaAvanzadoComponent'
import CrearPreguntaComponent from './components/CrearPreguntaComponent';
import ListaPreguntaComponent from './components/ListaPreguntaComponent';
import ResultadoComponent from './components/ResultadoComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/prueba" element={<PreguntaComponent/>} />
          <Route path="/pregunta" element={<CrearPreguntaComponent />} />
          <Route path="/pregunta/basico" element={<PruebaBasicoComponent />} />
          <Route path="/pregunta/intermedio" element={<PruebaIntermedioComponent />} />
          <Route path="/pregunta/avanzado" element={<PruebaAvanzadoComponent />} />
          <Route path="/pregunta/lista-preguntas" element={<ListaPreguntaComponent />} />
          <Route path="/resultados" element={<ResultadoComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
