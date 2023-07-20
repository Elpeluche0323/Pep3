package pep3.preguntaservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "pregunta")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PreguntaEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String pregunta;
    private String codigo;
    private String dificultad;
    private String respuesta;
}
