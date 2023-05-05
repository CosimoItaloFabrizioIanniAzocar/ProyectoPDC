package com.proyectotesis.proyectopdc.PACIENTE.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Table(name = "paciente")
@Entity

public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "id_paciente")
    private int idPaciente;

    @Getter@Setter @Column(name = "nombre")
    private String nombrePaciente;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Getter@Setter @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;

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
