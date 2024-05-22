package com.labbackend.labbackendx.controller;

import com.labbackend.labbackendx.model.team.Team;
import com.labbackend.labbackendx.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teams")
public class TeamController {

    private final TeamRepository teamRepository;

    @Autowired
    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    // Nested TeamDTO class
    public static class TeamDTO {
        private String name;
        private String description;
        // Add other fields as needed

        // Constructors, getters, and setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }
    }

    @GetMapping("teams")
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Team> getById(@PathVariable Long id) {
        Optional<Team> teamOptional = teamRepository.findById(id);
        if (teamOptional.isPresent()) {
            return ResponseEntity.ok(teamOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/add")
    public Team addTeam(@RequestBody TeamDTO teamDTO) {
        Team team = new Team();
        team.setName(teamDTO.getName());
        team.setDescription(teamDTO.getDescription());
        // Set other fields as needed
        return teamRepository.save(team);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Team> updateTeam(@PathVariable Long id, @RequestBody TeamDTO updatedTeamDTO) {
        Optional<Team> teamOptional = teamRepository.findById(id);
        if (!teamOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Team team = teamOptional.get();
        team.setName(updatedTeamDTO.getName());
        team.setDescription(updatedTeamDTO.getDescription());
        // Update other fields as needed
        teamRepository.save(team);
        return ResponseEntity.ok(team);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> deleteTeam(@PathVariable Long id) {
        if (!teamRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        teamRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}