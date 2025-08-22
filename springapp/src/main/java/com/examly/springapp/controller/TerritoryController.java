
// package com.examly.springapp.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.examly.springapp.model.SpiceMerchant;
// import com.examly.springapp.model.Territory;
// import com.examly.springapp.service.SpiceMerchantService;
// import com.examly.springapp.service.TerritoryService;

// import java.util.List;

// @RestController
// @CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping("/territory")
// public class TerritoryController {

//     @Autowired
//     private TerritoryService territoryService;

//     @Autowired
//     private SpiceMerchantService spiceMerchantService;

//     @PostMapping("/add")
//     public Territory add(@RequestBody Territory territory) {
//         return territoryService.addTerritory(territory);
//     }

//     @GetMapping("/pending")
//     public List<Territory> getPending() {
//         return territoryService.getPendingTerritories();
//     }

//     // Accept → Move to SpiceMerchant
//     @PostMapping("/accept/{id}")
//     public Territory accept(@PathVariable int id) {
//         Territory t = territoryService.getTerritoryById(id);
//         t.setStatus(Territory.SpiceStatus.APPROVED);
//         t.setRejectReason(null);
//         territoryService.updateTerritory(t);

//         SpiceMerchant sm = new SpiceMerchant();
//         sm.setName(t.getName());
//         sm.setSpices(t.getSpices());
//         sm.setExperience(t.getExperience());
//         sm.setStoreLocation(t.getStoreLocation());
//         sm.setPhoneNumber(t.getPhoneNumber());
//         sm.setEmail(t.getEmail());
//         sm.setLocation(t.getLocation());
//         spiceMerchantService.addSpiceMerchant(sm);

//         return t;
//     }

//     // Reject with reason
//     @PostMapping("/reject/{id}")
//     public ResponseEntity<String> reject(@PathVariable int id, @RequestBody String reason) {
//         Territory t = territoryService.getTerritoryById(id);
//         if (t == null) {
//             return ResponseEntity.notFound().build();
//         }
//         t.setStatus(Territory.SpiceStatus.REJECTED);
//         t.setRejectReason(reason);
//         territoryService.updateTerritory(t);
//         return ResponseEntity.ok("Territory rejected with reason: " + reason);
//     }
// }
package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.SpiceMerchant;
import com.examly.springapp.model.Territory;
import com.examly.springapp.service.SpiceMerchantService;
import com.examly.springapp.service.TerritoryService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/territory")
public class TerritoryController {

    @Autowired
    private TerritoryService territoryService;

    @Autowired
    private SpiceMerchantService spiceMerchantService;

    @PostMapping("/add")
    public Territory add(@RequestBody Territory territory) {
        return territoryService.addTerritory(territory);
    }

    // Fetch pending (optionally filter by location)
    @GetMapping("/pending")
    public List<Territory> getPending(@RequestParam(required = false) String location) {
        if (location != null && !location.isEmpty()) {
            return territoryService.getPendingByLocation(location);
        }
        return territoryService.getPendingTerritories();
    }

    // Accept → Move to SpiceMerchant
    @PostMapping("/accept/{id}")
    public Territory accept(@PathVariable int id) {
        Territory t = territoryService.getTerritoryById(id);
        t.setStatus(Territory.SpiceStatus.APPROVED);
        t.setRejectReason(null);
        territoryService.updateTerritory(t);

        SpiceMerchant sm = new SpiceMerchant();
        sm.setName(t.getName());
        sm.setSpices(t.getSpices());
        sm.setExperience(t.getExperience());
        sm.setStoreLocation(t.getStoreLocation());
        sm.setPhoneNumber(t.getPhoneNumber());
        sm.setEmail(t.getEmail());
        sm.setLocation(t.getLocation()); // copy location
        spiceMerchantService.addSpiceMerchant(sm);

        return t;
    }

    // Reject with reason
    @PostMapping("/reject/{id}")
    public ResponseEntity<String> reject(@PathVariable int id, @RequestBody String reason) {
        Territory t = territoryService.getTerritoryById(id);
        if (t == null) {
            return ResponseEntity.notFound().build();
        }
        t.setStatus(Territory.SpiceStatus.REJECTED);
        t.setRejectReason(reason);
        territoryService.updateTerritory(t);
        return ResponseEntity.ok("Territory rejected with reason: " + reason);
    }
}
