package com.labbackend.labbackendx.repository;

import com.labbackend.labbackendx.model.Publication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicationsRepository extends JpaRepository<Publication, Long> {
    // You can define custom query methods here if needed
}
