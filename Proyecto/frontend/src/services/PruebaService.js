import axios from 'axios';

const PRUEBA_API_URL = "http://localhost:8083/prueba";

class PruebaService {

    getPrueba(){
        return axios.get(PRUEBA_API_URL);
    }
    getPruebaBasico(){
        return axios.get(PRUEBA_API_URL+"/basico")
    }
    getPruebaIntermedio(){
        return axios.get(PRUEBA_API_URL+"/intermedio")
    }
    getPruebaAvanzado(){
        return axios.get(PRUEBA_API_URL+"/avanzado")
    }

    createPrueba(prueba){
        return axios.post(PRUEBA_API_URL, prueba);
    }

}

export default new PruebaService()