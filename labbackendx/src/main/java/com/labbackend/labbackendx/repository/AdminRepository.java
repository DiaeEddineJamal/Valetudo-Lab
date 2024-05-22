package com.labbackend.labbackendx.repository;

import com.labbackend.labbackendx.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    // You can define custom query methods here if needed
}
