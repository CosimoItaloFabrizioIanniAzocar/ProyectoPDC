package com.proyectotesis.proyectopdc.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "paciente")
@Entity

public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "IDpaciente")
    private int idPaciente;

    @Getter@Setter @Column(name = "nombre")
    private String nombrePaciente;

    @Getter@Setter @Column(name = "edad")
    private int edadPaciente;

    @Getter@Setter @Column(name = "rut")
    private String rutPaciente;

    @Getter@Setter @Column(name = "pasaporte")
    private String pasaportePaciente;

    @Getter@Setter @Column(name = "partnacimiento")
    private String partidaNacimientoPaciente;

    @Getter@Setter @Column(name = "sexo")
    private char sexoPaciente;

    @Getter@Setter @Column(name = "direccion")
    private String direccionPaciente;

    @Getter@Setter @Column(name = "telefono")
    private String telefonoPaciente;

    @Getter@Setter @Column(name = "email")
    private String emailPaciente;

}
