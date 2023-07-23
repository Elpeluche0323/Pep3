import axios from 'axios';

class PreguntaService {

    createPregunta(pregunta){
        return axios.post("http://localhost:8080/pregunta", pregunta);
    }

    getPregunta(){
        return axios.get("http://localhost:8080/pregunta/lista-preguntas");
    }

     
    getPreguntaBasico(){
        return axios.get("http://localhost:8080/pregunta/basico");
    }

    getPreguntaIntermedio(){
        return axios.get("http://localhost:8080/pregunta/intermedio");
    }

    getPreguntaAvanzado(){
        return axios.get("http://localhost:8080/pregunta/avanzado");
    }



}

export default new PreguntaService()