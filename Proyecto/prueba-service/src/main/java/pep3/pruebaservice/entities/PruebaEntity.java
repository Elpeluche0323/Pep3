package pep3.pruebaservice.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "prueba")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PruebaEntity {
    @Id
    @NonNull
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    private String dificultad;
    private Double promedio;
}
