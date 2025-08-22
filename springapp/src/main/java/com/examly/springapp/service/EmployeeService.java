package com.examly.springapp.service;

import com.examly.springapp.model.Employee;
import com.examly.springapp.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class EmployeeService {
     @Autowired  
    private  EmployeeRepository repo;

    public Employee addEmployee(Employee employee) {
        return repo.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee emp = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    
        emp.setName(employeeDetails.getName());
        emp.setEmail(employeeDetails.getEmail());
        emp.setPhone(employeeDetails.getPhone());
        emp.setRole(employeeDetails.getRole());
        emp.setLocation(employeeDetails.getLocation()); 
        return repo.save(emp);
    }
    
}
