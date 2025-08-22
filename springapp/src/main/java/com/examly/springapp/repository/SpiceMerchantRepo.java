package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.SpiceMerchant;

@Repository
public interface SpiceMerchantRepo  extends JpaRepository<SpiceMerchant,Integer>
{
    SpiceMerchant findByEmail(String email);
    boolean existsByEmail(String email);
    List<SpiceMerchant> findByLocation(String location);
}
