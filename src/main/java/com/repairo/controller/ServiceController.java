package com.repairo.controller;

import org.springframework.web.bind.annotation.CrossOrigin; // 1. Import this
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000") // 2. Add this right here!
public class ServiceController {

    @GetMapping
    public String[] getServices() {
        return new String[]{"Plumber", "Electrician", "Carpenter", "AC & Appliance Repair", "Cleaning & Pest Control"};
    }
}