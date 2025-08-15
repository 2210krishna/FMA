package com.examly.springapp.model;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class SpiceMerchant {
    // enum Status{
    //     Submited,
    //     Under_Review,
    //     Approved,
    //     Rejected,
    //     Pending
    // }
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private int id;
    private String name;
    private String spices;
    private int experience;
    private String storeLocation;
    private String phoneNumber;
    // @Enumerated(EnumType.STRING)
    // private Status status;


}

