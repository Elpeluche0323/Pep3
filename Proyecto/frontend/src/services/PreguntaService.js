import axios from 'axios';

const PREGUNTA_API_URL = "http://localhost:8082/pregunta";

class PreguntaService {

    getPregunta(){
        return axios.get(PREGUNTA_API_URL);
    }

    createPregunta(pregunta){
        return axios.post(PREGUNTA_API_URL, pregunta);
    }

}

export default new PreguntaService()