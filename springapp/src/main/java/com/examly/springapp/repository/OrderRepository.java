package com.examly.springapp.repository;

import com.examly.springapp.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    List<Orders> findByVendorEmail(String vendorEmail);
}
