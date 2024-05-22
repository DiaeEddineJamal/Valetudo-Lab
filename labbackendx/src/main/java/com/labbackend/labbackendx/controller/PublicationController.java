package com.labbackend.labbackendx.controller;

import com.labbackend.labbackendx.model.Member;
import com.labbackend.labbackendx.model.Publication;
import com.labbackend.labbackendx.repository.MemberRepository;
import com.labbackend.labbackendx.repository.PublicationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/publications")
public class PublicationController {

    private final PublicationsRepository publicationRepository;
    private final MemberRepository memberRepository;

    @Autowired
    public PublicationController(PublicationsRepository publicationRepository, MemberRepository memberRepository) {
        this.publicationRepository = publicationRepository;
        this.memberRepository = memberRepository;
    }

    public static class PublicationDTO {
        private String reference;
        private int year;
        private Set<String> memberNames = new HashSet<>(); // Initialize memberNames with an empty set

        // Getters and setters
        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }

        public int getYear() {
            return year;
        }

        public void setYear(int year) {
            this.year = year;
        }

        public Set<String> getMemberNames() {
            return memberNames;
        }

        public void setMemberNames(Set<String> memberNames) {
            this.memberNames = memberNames;
        }
    }

    @PostMapping
    public ResponseEntity<Publication> addPublication(@RequestBody PublicationDTO publicationDTO) {
        Publication publication = new Publication();
        publication.setReference(publicationDTO.getReference());
        publication.setYear(publicationDTO.getYear());

        // Fetch members by their names and add them to the publication
        Set<Member> members = publicationDTO.getMemberNames().stream()
                .map(memberName -> memberRepository.findByName(memberName))
                .filter(member -> member != null)
                .map(member -> (Member) member) // Explicit cast to Member
                .collect(Collectors.toSet());
        publication.setMembers(members);

        Publication savedPublication = publicationRepository.save(publication);
        return new ResponseEntity<>(savedPublication, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Publication>> getAllPublications() {
        List<Publication> publications = publicationRepository.findAll();
        return ResponseEntity.ok(publications);
    }
}
