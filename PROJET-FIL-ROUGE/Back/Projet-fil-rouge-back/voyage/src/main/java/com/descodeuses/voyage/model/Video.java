package com.descodeuses.voyage.model;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nomVideo;
    private String description;
    private Date date;

    @ManyToOne
    private SousCategorie sousCategorie;
    private String url;

    @OneToMany(mappedBy = "video")
    private List<Commentaire> commentaire;

    @OneToMany(mappedBy = "video")
    private List<Favoris> favoris;

    @ManyToOne
    private Utilisateur utilisateur;
}
