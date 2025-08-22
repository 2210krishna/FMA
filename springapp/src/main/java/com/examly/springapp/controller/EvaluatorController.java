
// package com.examly.springapp.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.examly.springapp.model.Evaluator;
// import com.examly.springapp.model.Territory;
// import com.examly.springapp.service.EvaluatorService;
// import com.examly.springapp.service.TerritoryService;

// import java.util.List;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping("/evaluator")
// public class EvaluatorController {

//     @Autowired
//     private EvaluatorService evaluatorService;

//     @Autowired
//     private TerritoryService territoryService;

//     // Fetch pending applications for evaluator
//     @GetMapping("/pending")
//     public List<Evaluator> getPending() {
//         return evaluatorService.getPendingEvaluations();
//     }

//     // Fetch applications for a specific guest
//     @GetMapping("/myApplications")
//     public List<Evaluator> getMyApplications(@RequestParam Long guestId) {
//         return evaluatorService.getApplicationsByGuest(guestId);
//     }

//     // Guest applies
//     @PostMapping("/apply")
//     public Evaluator apply(@RequestBody Evaluator evaluator, @RequestParam Long guestId) {
//         evaluator.setGuestId(guestId); 
//         evaluator.setStatus(Evaluator.Status.SUBMITTED);
//         return evaluatorService.addEvaluator(evaluator);
//     }

//     // Approve evaluator → Move to Territory table
//     @PutMapping("/evaluate/{id}")
//     public Evaluator evaluate(@PathVariable int id) {
//         Evaluator ev = evaluatorService.getEvaluatorById(id);
//         ev.setStatus(Evaluator.Status.APPROVED);
//         ev.setRejectReason(null);
//         evaluatorService.updateEvaluator(ev);

//         // automatically create a Territory row
//         Territory t = new Territory();
//         t.setName(ev.getName());
//         t.setSpices(ev.getSpices());
//         t.setExperience(ev.getExperience());
//         t.setStoreLocation(ev.getStoreLocation());
//         t.setPhoneNumber(ev.getPhoneNumber());
//         t.setEvaluatorId(ev.getId());
//         t.setEmail(ev.getEmail());
//         t.setLocation(ev.getLocation());
//         t.setStatus(Territory.SpiceStatus.PENDING);
//         territoryService.addTerritory(t);

//         return ev;
//     }

//     // Reject evaluator with reason
//     @PutMapping("/reject/{id}")
//     public ResponseEntity<String> reject(@PathVariable int id, @RequestBody String reason) {
//         Evaluator ev = evaluatorService.getEvaluatorById(id);
//         if (ev == null) {
//             return ResponseEntity.notFound().build();
//         }
//         ev.setStatus(Evaluator.Status.REJECTED);
//         ev.setRejectReason(reason);
//         evaluatorService.updateEvaluator(ev);
//         return ResponseEntity.ok("Evaluator rejected with reason: " + reason);
//     }
// }
package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    // Fetch pending applications (optionally filter by location)
    @GetMapping("/pending")
    public List<Evaluator> getPending(@RequestParam(required = false) String location) {
        if (location != null && !location.isEmpty()) {
            return evaluatorService.getPendingByLocation(location);
        }
        return evaluatorService.getPendingEvaluations();
    }

    // Fetch applications for a specific guest
    @GetMapping("/myApplications")
    public List<Evaluator> getMyApplications(@RequestParam Long guestId) {
        return evaluatorService.getApplicationsByGuest(guestId);
    }

    // Guest applies
    @PostMapping("/apply")
    public Evaluator apply(@RequestBody Evaluator evaluator, @RequestParam Long guestId) {
        evaluator.setGuestId(guestId); 
        evaluator.setStatus(Evaluator.Status.SUBMITTED);
        return evaluatorService.addEvaluator(evaluator);
    }

    // Approve evaluator → Move to Territory
    @PutMapping("/evaluate/{id}")
    public Evaluator evaluate(@PathVariable int id) {
        Evaluator ev = evaluatorService.getEvaluatorById(id);
        ev.setStatus(Evaluator.Status.APPROVED);
        ev.setRejectReason(null);
        evaluatorService.updateEvaluator(ev);

        Territory t = new Territory();
        t.setName(ev.getName());
        t.setSpices(ev.getSpices());
        t.setExperience(ev.getExperience());
        t.setStoreLocation(ev.getStoreLocation());
        t.setPhoneNumber(ev.getPhoneNumber());
        t.setEvaluatorId(ev.getId());
        t.setEmail(ev.getEmail());
        t.setLocation(ev.getLocation()); // copy location
        t.setStatus(Territory.SpiceStatus.PENDING);
        territoryService.addTerritory(t);

        return ev;
    }

    // Reject evaluator with reason
    @PutMapping("/reject/{id}")
    public ResponseEntity<String> reject(@PathVariable int id, @RequestBody String reason) {
        Evaluator ev = evaluatorService.getEvaluatorById(id);
        if (ev == null) {
            return ResponseEntity.notFound().build();
        }
        ev.setStatus(Evaluator.Status.REJECTED);
        ev.setRejectReason(reason);
        evaluatorService.updateEvaluator(ev);
        return ResponseEntity.ok("Evaluator rejected with reason: " + reason);
    }
}
