package pep3.preguntaservice.services;

import pep3.preguntaservice.entities.PreguntaEntity;
import pep3.preguntaservice.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import java.util.ArrayList;
@Service
public class PreguntaService {

    @Autowired
    PreguntaRepository preguntaRepository;

    public ArrayList<PreguntaEntity> obtenerPregunta(){
        return (ArrayList<PreguntaEntity>) preguntaRepository.findAll();
    }

    public List<PreguntaEntity> obtenerPreguntaBasico(){
        return preguntaRepository.obtenerPreguntaBasico();
    }

    public List<PreguntaEntity> obtenerPreguntaIntermedio(){
        return preguntaRepository.obtenerPreguntaIntermedio();
    }

    public List<PreguntaEntity> obtenerPreguntaAvanzado(){
        return preguntaRepository.obtenerPreguntaAvanzado();
    }

    public void guardarPregunta(PreguntaEntity pregunta){
        preguntaRepository.save(pregunta);
    }

}
