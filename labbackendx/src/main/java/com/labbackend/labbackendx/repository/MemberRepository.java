package com.labbackend.labbackendx.repository;

import com.labbackend.labbackendx.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Object findByName(String s);
    // You can define custom query methods here if needed
    Optional<Member> findById(Long id);
    List<Member> findByIsDoctorant(boolean isDoctorant);
}

