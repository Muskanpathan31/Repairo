package com.repairo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private double totalAmount;

    private String paymentStatus;

    private String orderStatus; // PLACED, CONFIRMED, COMPLETED
}

