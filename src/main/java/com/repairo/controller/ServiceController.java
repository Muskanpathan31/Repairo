
package com.repairo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/services")
@CrossOrigin("*")
public class ServiceController {

    @GetMapping
    public String[] getServices() {
        return new String[]{"Plumber", "Electrician", "Carpenter"};
    }
}
