package com.proyectotesis.proyectopdc.INSUMO.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "insumos")
@Entity
public class Insumo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "id_insumo")
    private int idInsumo;

    @Getter@Setter @Column(name = "nombre")
    private String nombre;

    @Getter@Setter @Column(name = "cantidad")
    private int cantidad;

    @Getter@Setter @Column(name = "estado")
    private String estado;
}
