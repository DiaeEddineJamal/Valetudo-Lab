package com.labbackend.labbackendx.controller;

import com.labbackend.labbackendx.model.Member;
import com.labbackend.labbackendx.model.team.Team;
import com.labbackend.labbackendx.repository.MemberRepository;
import com.labbackend.labbackendx.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberRepository memberRepository;
    private final TeamRepository teamRepository;

    @Autowired
    public MemberController(MemberRepository memberRepository, TeamRepository teamRepository) {
        this.memberRepository = memberRepository;
        this.teamRepository = teamRepository;
    }

    @PostMapping(consumes = "multipart/form-data")
    public Member addMember(@ModelAttribute MemberDTO memberDTO, @RequestParam("image") MultipartFile image) {
        Member member = new Member();
        member.setName(memberDTO.getName());
        member.setKeyword(memberDTO.getKeyword());
        member.setDoctorant(memberDTO.isDoctorant());

        if (memberDTO.getTeamId() != null) {
            Optional<Team> teamOptional = teamRepository.findById(memberDTO.getTeamId());
            teamOptional.ifPresent(member::setTeam);
        }

        if (image != null && !image.isEmpty()) {
            try {
                member.setImage(image.getBytes()); // Set the image as a byte array
            } catch (IOException e) {
                // Handle the exception if necessary
                e.printStackTrace();
            }
        }

        return memberRepository.save(member);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id) {
        Optional<Member> memberOptional = memberRepository.findById(id);
        return memberOptional.map(member -> ResponseEntity.ok().body(member))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/chercheurs")
    public List<Member> getChercheurs() {
        return memberRepository.findByIsDoctorant(false);
    }

    // New endpoint to get all members
    @GetMapping
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // New endpoint to get member image by ID
    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Optional<Member> memberOptional = memberRepository.findById(id);
        if (memberOptional.isPresent() && memberOptional.get().getImage() != null) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // or MediaType.IMAGE_PNG based on your image type
                    .body(memberOptional.get().getImage());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        Optional<Member> memberOptional = memberRepository.findById(id);
        if (memberOptional.isPresent()) {
            memberRepository.delete(memberOptional.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public static class MemberDTO {
        private String name;
        private String keyword;
        private boolean isDoctorant;
        private Long teamId;

        // Default constructor, getters, and setters...

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getKeyword() {
            return keyword;
        }

        public void setKeyword(String keyword) {
            this.keyword = keyword;
        }

        public boolean isDoctorant() {
            return isDoctorant;
        }

        public void setDoctorant(boolean doctorant) {
            isDoctorant = doctorant;
        }

        public Long getTeamId() {
            return teamId;
        }

        public void setTeamId(Long teamId) {
            this.teamId = teamId;
        }
    }
}