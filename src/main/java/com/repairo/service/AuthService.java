package com.repairo.service;

import com.repairo.model.User;

public interface AuthService {

    // Register a user (Admin/User/Service Provider)
    User register(User user);

    // Login a user and return a role message
    String login(String username, String password);
}

