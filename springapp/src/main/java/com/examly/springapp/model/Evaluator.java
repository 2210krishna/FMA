package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Evaluator {

    public enum Status {
        SUBMITTED, UNDER_REVIEW, APPROVED, REJECTED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String spices;
    private int experience;
    private String storeLocation;
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private Status status = Status.SUBMITTED;

    private Long guestId; // link to user who applied
}
