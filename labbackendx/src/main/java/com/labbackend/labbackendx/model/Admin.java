package com.labbackend.labbackendx.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "admins")
@PrimaryKeyJoinColumn(name = "member_id")
public class Admin extends Member {

    // Additional attributes specific to Admin
    private String role;

    // Constructors
    public Admin() {
        super();
    }

    public Admin(String name, String keyword, String role) {
        super(name, keyword);
        this.role = role;
    }

    // Getters and Setters
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
