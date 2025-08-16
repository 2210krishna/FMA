package com.examly.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByEmail(String email);
}
