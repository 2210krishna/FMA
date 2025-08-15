package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Evaluator;
import com.examly.springapp.repository.EvaluatorRepository;

@Service
public class EvaluatorService {

    @Autowired
    private EvaluatorRepository evaluatorRepository;

    public Evaluator addEvaluator(Evaluator evaluator) {
        evaluator.setStatus(Evaluator.Status.SUBMITTED);
        return evaluatorRepository.save(evaluator);
    }

    public List<Evaluator> getPendingEvaluations() {
        return evaluatorRepository.findByStatus(Evaluator.Status.SUBMITTED);
    }

    public List<Evaluator> getApplicationsByGuest(Long guestId) {
        return evaluatorRepository.findByGuestId(guestId);
    }

    public Evaluator updateEvaluator(Evaluator evaluator) {
        return evaluatorRepository.save(evaluator);
    }

    public void deleteEvaluator(int id) {
        evaluatorRepository.deleteById(id);
    }
    public Evaluator getEvaluatorById(int id) {
        return evaluatorRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Evaluator not found with id " + id));
    }
    
}
