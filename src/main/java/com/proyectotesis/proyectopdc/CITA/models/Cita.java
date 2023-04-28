package com.proyectotesis.proyectopdc.CITA.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Table(name = "cita")
@Entity
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "IDcita")
    private int idCita;

    @Getter@Setter @Column(name = "ID_paciente")
    private int idPaciente;

    @Getter@Setter @Column(name = "fecha")
    private Date fecha;

    @Getter@Setter @Column(name = "tipo")
    private String tipo;

    @Getter@Setter @Column(name = "estado")
    private String estado;

}
