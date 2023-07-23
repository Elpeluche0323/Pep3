package pep3.preguntaservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pep3.preguntaservice.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer> {
    @Query("SELECT p FROM PreguntaEntity p WHERE p.dificultad = 'basico'")
    List<PreguntaEntity> obtenerPreguntaBasico();

    @Query("SELECT p FROM PreguntaEntity p WHERE p.dificultad = 'intermedio'")
    List<PreguntaEntity> obtenerPreguntaIntermedio();

    @Query("SELECT p FROM PreguntaEntity p WHERE p.dificultad = 'avanzado'")
    List<PreguntaEntity> obtenerPreguntaAvanzado();
}
