package com.examly.springapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.model.Territory;

public interface TerritoryRepository extends JpaRepository<Territory, Integer> {
    List<Territory> findByStatus(Territory.SpiceStatus status);

    Territory findByEmail(String email);

    // 🔹 New: Get territories by location/state
    List<Territory> findByLocation(String location);

    // 🔹 New: Get territories by location & status
    List<Territory> findByLocationAndStatus(String location, Territory.SpiceStatus status);
}
