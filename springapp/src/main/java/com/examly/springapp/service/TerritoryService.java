package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Territory;
import com.examly.springapp.repository.TerritoryRepository;

@Service
public class TerritoryService {

    @Autowired
    private TerritoryRepository territoryRepository;

    public Territory addTerritory(Territory territory) {
        territory.setStatus(Territory.SpiceStatus.PENDING);
        return territoryRepository.save(territory);
    }

    public List<Territory> getPendingTerritories() {
        return territoryRepository.findByStatus(Territory.SpiceStatus.PENDING);
    }

    public Territory updateTerritory(Territory territory) {
        return territoryRepository.save(territory);
    }
    public Territory getTerritoryById(int id) {
        return territoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Territory not found with id " + id));
    }
    

    public void deleteTerritory(int id) {
        territoryRepository.deleteById(id);
    }
    public Territory getByEmail(String email){
        return territoryRepository.findByEmail(email);
    }
}
