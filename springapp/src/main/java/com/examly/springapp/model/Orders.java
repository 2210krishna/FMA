package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vendorEmail;   // Who placed the order
    private String spiceName;     // Spice ordered
    private int quantity;         // Quantity
    private String status = "PENDING"; // Default status
}