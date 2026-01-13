package com.repairo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.repairo.model.ServiceProvider;

public interface ServiceProviderRepository
        extends JpaRepository<ServiceProvider, Long> {

    Optional<ServiceProvider> findByEmail(String email);
}




