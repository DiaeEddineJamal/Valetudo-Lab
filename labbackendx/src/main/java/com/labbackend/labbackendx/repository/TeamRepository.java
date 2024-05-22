package com.labbackend.labbackendx.repository;

import com.labbackend.labbackendx.model.team.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
    // You can define custom query methods here if needed
}
