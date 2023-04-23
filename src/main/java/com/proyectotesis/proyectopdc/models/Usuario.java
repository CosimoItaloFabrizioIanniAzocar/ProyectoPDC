package com.proyectotesis.proyectopdc.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "usuario")
@Entity

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "ID")
    private int id;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "contrasena")
    private String password;


}
