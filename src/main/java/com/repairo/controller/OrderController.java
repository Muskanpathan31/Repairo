package com.repairo.controller;

import com.repairo.model.Order;
import com.repairo.repository.OrderRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping("/place")
    public Order placeOrder(@RequestBody Order order) {
        order.setOrderStatus("PLACED");
        return orderRepository.save(order);
    }
}

