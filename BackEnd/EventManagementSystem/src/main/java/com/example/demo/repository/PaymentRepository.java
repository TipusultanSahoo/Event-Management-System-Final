package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Payment;


public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // Additional query methods can be defined here if needed
}

