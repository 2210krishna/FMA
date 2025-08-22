package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;       
    private String email;      
    private String phone;      
    private String role;   // (Evaluator, Territory Manager, etc.)
    private String location;
}
