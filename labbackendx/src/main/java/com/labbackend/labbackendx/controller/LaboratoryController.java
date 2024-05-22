package com.labbackend.labbackendx.controller;

import com.labbackend.labbackendx.model.Laboratory;
import com.labbackend.labbackendx.repository.LaboRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/laboratories")
public class LaboratoryController {

    private final LaboRepository laboRepository;

    @Autowired
    public LaboratoryController(LaboRepository laboRepository) {
        this.laboRepository = laboRepository;
    }

    // Nested LaboratoryDTO class
    public static class LaboratoryDTO {
        private String name;
        private String address;
        private String phoneNumber;
        private double longitude;
        private double latitude;

        // Getters and setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }

        public double getLongitude() {
            return longitude;
        }

        public void setLongitude(double longitude) {
            this.longitude = longitude;
        }

        public double getLatitude() {
            return latitude;
        }

        public void setLatitude(double latitude) {
            this.latitude = latitude;
        }
    }

    @GetMapping
    public List<Laboratory> getAllLaboratories() {
        return laboRepository.findAll();
    }

    @PostMapping("/add")
    public Laboratory addLaboratory(@RequestBody LaboratoryDTO laboratoryDTO) {
        Laboratory laboratory = new Laboratory();
        laboratory.setName(laboratoryDTO.getName());
        laboratory.setAddress(laboratoryDTO.getAddress());
        laboratory.setPhoneNumber(laboratoryDTO.getPhoneNumber());
        laboratory.setLongitude(laboratoryDTO.getLongitude());
        laboratory.setLatitude(laboratoryDTO.getLatitude());
        return laboRepository.save(laboratory);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Laboratory> updateLaboratory(@PathVariable Long id, @RequestBody LaboratoryDTO updatedLaboratoryDTO) {
        Optional<Laboratory> laboratoryOptional = laboRepository.findById(id);
        if (!laboratoryOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Laboratory laboratory = laboratoryOptional.get();
        laboratory.setName(updatedLaboratoryDTO.getName());
        laboratory.setAddress(updatedLaboratoryDTO.getAddress());
        laboratory.setPhoneNumber(updatedLaboratoryDTO.getPhoneNumber());
        laboratory.setLongitude(updatedLaboratoryDTO.getLongitude());
        laboratory.setLatitude(updatedLaboratoryDTO.getLatitude());
        Laboratory updatedLaboratory = laboRepository.save(laboratory); // Save the updated laboratory
        return ResponseEntity.ok(updatedLaboratory); // Return the updated laboratory
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> deleteLaboratory(@PathVariable Long id) {
        if (!laboRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        laboRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}