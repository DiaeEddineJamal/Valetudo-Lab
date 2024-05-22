package com.labbackend.labbackendx.model;

import com.labbackend.labbackendx.model.team.Team;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "members")
@Inheritance(strategy = InheritanceType.JOINED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String keyword;

    private boolean isDoctorant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "laboratory_id")
    private Laboratory laboratory;

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    @ManyToMany
    @JoinTable(
            name = "member_publication",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "publication_id")
    )
    private Set<Publication> publications = new HashSet<>();

    // Constructors
    public Member() {
    }

    public Member(String name, String keyword, boolean isDoctorant) {
        this.name = name;
        this.keyword = keyword;
        this.isDoctorant = isDoctorant;
    }

    public Member(String name, String keyword) {
        this.name = name;
        this.keyword = keyword;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Laboratory getLaboratory() {
        return laboratory;
    }

    public void setLaboratory(Laboratory laboratory) {
        this.laboratory = laboratory;
    }

    public Set<Publication> getPublications() {
        return publications;
    }

    public void setPublications(Set<Publication> publications) {
        this.publications = publications;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public void setTeam(Team team) {
        // Implementation for setting the team
    }
}
