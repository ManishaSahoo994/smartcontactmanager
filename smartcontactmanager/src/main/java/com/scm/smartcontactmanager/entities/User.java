package com.scm.smartcontactmanager.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.*;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "user")
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
    private String usedId;
    @Column(name = "user_name", nullable = false)
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    @Lob
    private String about;
    @Lob
    private String profilePic;
    private String phoneNumber;
    //information

    private boolean enabled=false;
    private boolean emailVerified = false;
    private boolean phoneVerified = false;

    //self login,google login,github,facebook,linkedin
    private Providers provider=Providers.SELF;
    private String providerUserId;

    //add more fields if needed
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
    private List<Contact>contacts=new ArrayList<>();


}
