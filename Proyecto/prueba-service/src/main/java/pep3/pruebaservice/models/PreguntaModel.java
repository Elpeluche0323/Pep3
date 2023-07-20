package pep3.pruebaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PreguntaModel {
    private String pregunta;
    private String codigo;
    private String dificultad;
    private String respuesta;
}
