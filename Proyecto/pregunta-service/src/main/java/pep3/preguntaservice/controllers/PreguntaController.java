package pep3.preguntaservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pep3.preguntaservice.entities.PreguntaEntity;
import pep3.preguntaservice.services.PreguntaService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
@RequestMapping("/pregunta")
public class PreguntaController {

    @Autowired
    PreguntaService preguntaService;

    @GetMapping("/lista-preguntas")
    public ResponseEntity<List<PreguntaEntity>> obtenerPregunta(){
        List<PreguntaEntity> pregunta = preguntaService.obtenerPregunta();
        if(pregunta.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(pregunta);
    }


    @GetMapping("/basico")
    public List<PreguntaEntity> obtenerPreguntaBasico() {
        return preguntaService.obtenerPreguntaBasico();
    }


    @GetMapping("/intermedio")
    public List<PreguntaEntity> obtenerPreguntaIntermedio() {
        return preguntaService.obtenerPreguntaIntermedio();
    }

    @GetMapping("/avanzado")
    public List<PreguntaEntity> obtenerPreguntaAvanzado() {
        return preguntaService.obtenerPreguntaAvanzado();
    }


    @PostMapping
    public void guardarPregunta(@RequestBody PreguntaEntity pregunta){
        preguntaService.guardarPregunta(pregunta);
    }



    @GetMapping("/nueva-pregunta")
    public String pregunta() {return "/nueva-pregunta";}

}
