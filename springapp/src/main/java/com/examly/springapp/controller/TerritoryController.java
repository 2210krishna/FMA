package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/pending")
    public List<Territory> getPending() {
        return territoryService.getPendingTerritories();
    }
@PostMapping("/accept/{id}")
public Territory accept(@PathVariable int id) {
    Territory t = territoryService.getTerritoryById(id);
    t.setStatus(Territory.SpiceStatus.APPROVED);
    territoryService.updateTerritory(t);

    // Add to SpiceMerchant table
    SpiceMerchant sm = new SpiceMerchant();
    sm.setName(t.getName());
    sm.setSpices(t.getSpices());
    sm.setExperience(t.getExperience());
    sm.setStoreLocation(t.getStoreLocation());
    sm.setPhoneNumber(t.getPhoneNumber());
    spiceMerchantService.addSpiceMerchant(sm);

    return t;
}

}
