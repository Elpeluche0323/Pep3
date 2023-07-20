package pep3.preguntaservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pep3.preguntaservice.entities.PreguntaEntity;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, String> {

}
