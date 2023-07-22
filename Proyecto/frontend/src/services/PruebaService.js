import axios from 'axios';

const PRUEBA_API_URL = "http://localhost:8083/prueba";

class PruebaService {

    getPrueba(){
        return axios.get(PRUEBA_API_URL);
    }

    createPrueba(prueba){
        return axios.post(PRUEBA_API_URL, prueba);
    }

}

export default new PruebaService()