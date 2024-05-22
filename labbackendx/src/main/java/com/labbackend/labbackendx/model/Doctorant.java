package com.labbackend.labbackendx.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctorants")
@PrimaryKeyJoinColumn(name = "member_id")
public class Doctorant extends Member {

    // Additional attributes specific to Doctorant
    private String researchTopic;
    private String supervisor;

    // Constructors
    public Doctorant() {
        super();
    }

    public Doctorant(String name, String keyword, String researchTopic, String supervisor) {
        super(name, keyword);
        this.researchTopic = researchTopic;
        this.supervisor = supervisor;
    }

    // Getters and Setters
    public String getResearchTopic() {
        return researchTopic;
    }

    public void setResearchTopic(String researchTopic) {
        this.researchTopic = researchTopic;
    }

    public String getSupervisor() {
        return supervisor;
    }

    public void setSupervisor(String supervisor) {
        this.supervisor = supervisor;
    }
}
