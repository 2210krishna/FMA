package com.examly.springapp.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SpiceMerchant {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String spices;
    private int experience;
    private String storeLocation;
    private String phoneNumber;
    private String location;  // Tamil Nadu, Kerala, Karnataka, Andhra, Telangana
}
