package com.examly.springapp.controller;

import com.examly.springapp.model.Orders;
import com.examly.springapp.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepo;

    public OrderController(OrderRepository orderRepo) {
        this.orderRepo = orderRepo;
    }

    // Place new order
    @PostMapping("/place")
    public Orders placeOrder(@RequestBody Orders order) {
        order.setStatus("PENDING"); // default
        return orderRepo.save(order);
    }

    // View orders by vendor email
    @GetMapping("/my-orders/{email}")
    public List<Orders> getMyOrders(@PathVariable String email) {
        return orderRepo.findByVendorEmail(email);
    }
        @GetMapping("/all")
    public List<Orders> getAllOrders() {
        return orderRepo.findAll();
    }

    // Update order status
    @PutMapping("/update-status/{id}")
    public Orders updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        Orders order = orderRepo.findById(id).orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return orderRepo.save(order);
    }
}
