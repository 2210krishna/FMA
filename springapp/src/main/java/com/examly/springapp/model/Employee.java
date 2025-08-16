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

    private String name;       // employee name
    private String email;      // employee email
    private String phone;      // employee phone
    private String role;       // role assigned (Evaluator, Territory Manager, etc.)
}
