package com.proyectotesis.proyectopdc.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name = "usuario")
@Entity

public class Usuario {

    @Id
    @Getter @Setter @Column(name = "ID")
    private long id;

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "contrasena")
    private String password;


}
