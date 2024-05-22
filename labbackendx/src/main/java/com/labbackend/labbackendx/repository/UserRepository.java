package com.labbackend.labbackendx.repository;


import com.labbackend.labbackendx.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
    // Define additional methods for specific queries if needed
}
