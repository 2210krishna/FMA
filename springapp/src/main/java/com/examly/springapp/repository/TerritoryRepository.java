package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Territory;
import java.util.List;
@Repository
public interface TerritoryRepository extends JpaRepository<Territory, Integer> {
    List<Territory> findByStatus(Territory.SpiceStatus status);
    Territory findByEmail(String email);
}

