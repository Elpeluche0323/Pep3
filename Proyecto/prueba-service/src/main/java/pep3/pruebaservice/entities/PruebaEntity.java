package pep3.pruebaservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "prueba")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PruebaEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String dificultad;
    private Double promedio;
}
