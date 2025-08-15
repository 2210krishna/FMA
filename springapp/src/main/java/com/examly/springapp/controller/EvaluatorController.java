package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.Evaluator;
import com.examly.springapp.model.Territory;
import com.examly.springapp.service.EvaluatorService;
import com.examly.springapp.service.TerritoryService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/evaluator")
public class EvaluatorController {

    @Autowired
    private EvaluatorService evaluatorService;
    @Autowired
        private TerritoryService territoryService;


    // Fetch pending applications for evaluator
    @GetMapping("/pending")
    public List<Evaluator> getPending() {
        return evaluatorService.getPendingEvaluations();
    }

    // Fetch applications for a specific guest
    @GetMapping("/myApplications")
    public List<Evaluator> getMyApplications(@RequestParam Long guestId) {
        return evaluatorService.getApplicationsByGuest(guestId);
    }

   @PostMapping("/apply")
public Evaluator apply(@RequestBody Evaluator evaluator, @RequestParam Long guestId) {
    evaluator.setGuestId(guestId); // fill automatically
    evaluator.setStatus(Evaluator.Status.SUBMITTED);
    return evaluatorService.addEvaluator(evaluator);
}

@PutMapping("/evaluate/{id}")
public Evaluator evaluate(@PathVariable int id) {
    // fetch evaluator
    Evaluator ev = evaluatorService.getEvaluatorById(id);
    ev.setStatus(Evaluator.Status.APPROVED);
    evaluatorService.updateEvaluator(ev);

    // automatically create a Territory row
    Territory t = new Territory();
    t.setName(ev.getName());
    t.setSpices(ev.getSpices());
    t.setExperience(ev.getExperience());
    t.setStoreLocation(ev.getStoreLocation());
    t.setPhoneNumber(ev.getPhoneNumber());
    t.setEvaluatorId(ev.getId());
    t.setStatus(Territory.SpiceStatus.PENDING);
    territoryService.addTerritory(t);

    return ev;
}

}
