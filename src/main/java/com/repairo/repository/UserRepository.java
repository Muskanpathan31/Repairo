package com.repairo.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.repairo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Find user by email (requires 'email' field in User entity)
    Optional<User> findByEmail(String email);

    // Example: find user by username (requires 'username' field in User entity)
    Optional<User> findByUsername(String username);

    // Example: check if a user exists by email
    boolean existsByEmail(String email);
}
