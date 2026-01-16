package com.repairo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private double amount;

    private String paymentMethod; // GPAY, PHONEPE, COD

    private String status; // PENDING, SUCCESS, FAILED

    // getters & setters
}
