package com.labbackend.labbackendx.repository;


import com.labbackend.labbackendx.model.Laboratory;
import com.labbackend.labbackendx.model.team.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaboRepository extends JpaRepository<Laboratory, Long> {
    // You can define custom query methods here if needed
}
