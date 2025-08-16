package com.examly.springapp.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    public enum Role
    {
        GUEST,
        VENDOR,
        TERRITORY_MANAGER,
        EVALUATOR,
        FRANCHISE_MANAGER,
        ADMIN;
    }
       @Id
        @GeneratedValue(strategy =GenerationType.IDENTITY)
        private Long id;
        private String email;
        private String password;
    

        @Enumerated(EnumType.STRING)
        private Role role;
       


}
