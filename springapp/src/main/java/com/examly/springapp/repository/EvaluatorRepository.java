package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Evaluator;
import java.util.List;

@Repository
public interface EvaluatorRepository extends JpaRepository<Evaluator, Integer> {
    List<Evaluator> findByStatus(Evaluator.Status status);
    List<Evaluator> findByGuestId(Long guestId); // fetch guest’s own applications
}
