// package com.examly.springapp.model;

// import jakarta.persistence.*;
// import lombok.*;

// @Data
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// public class Territory {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int id;

//     private String name;
//     private String email;   
//     private String spices;
//     private int experience;
//     private String storeLocation;
//     private String phoneNumber;

//     @Enumerated(EnumType.STRING)
//     private SpiceStatus status = SpiceStatus.PENDING;

//     private int evaluatorId; // reference evaluator row

//     public enum SpiceStatus {
//         PENDING, APPROVED, REJECTED
//     }
// }
package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Territory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private String spices;
    private int experience;
    private String storeLocation;
    private String phoneNumber;
    private String location;
    @Enumerated(EnumType.STRING)
    private SpiceStatus status = SpiceStatus.PENDING;

    private int evaluatorId; // reference evaluator row

    private String rejectReason; // NEW - reason if rejected

    public enum SpiceStatus {
        PENDING, APPROVED, REJECTED
    }
}
