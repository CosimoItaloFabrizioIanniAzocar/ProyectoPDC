package com.proyectotesis.proyectopdc.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity

public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "IDpaciente")
    private int idPaciente;

    @Getter@Setter @Column(name = "nombrePaciente")
    private String nombrePaciente;

    @Getter@Setter @Column(name = "edadPaciente")
    private int edadPaciente;

    @Getter@Setter @Column(name = "rutPaciente")
    private int rutPaciente;

    @Getter@Setter @Column(name = "pasaportePaciente")
    private int pasaportePaciente;

    @Getter@Setter @Column(name = "partidaNacimientoPaciente")
    private int partidaNacimientoPaciente;

    @Getter@Setter @Column(name = "sexoPaciente")
    private char sexoPaciente;

    @Getter@Setter @Column(name = "direccionPaciente")
    private String direccionPaciente;

    @Getter@Setter @Column(name = "telefonoPaciente")
    private int telefonoPaciente;

    @Getter@Setter @Column(name = "emailPaciente")
    private String emailPaciente;

}
