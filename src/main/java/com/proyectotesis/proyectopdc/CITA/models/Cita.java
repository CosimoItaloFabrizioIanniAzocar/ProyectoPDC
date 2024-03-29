package com.proyectotesis.proyectopdc.CITA.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Table(name = "cita")
@Entity
public class Cita {
    public Cita() {

    }

    public Cita(int idCita, int idPaciente, Date fecha, String hora, String tipo, Boolean estado) {
        this.idCita = idCita;
        this.idPaciente = idPaciente;
        this.fecha = fecha;
        this.hora = hora;
        this.tipo = tipo;
        this.estado = estado;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter@Setter @Column(name = "id_cita")
    private int idCita;

    @Getter@Setter @Column(name = "id_paciente")
    private int idPaciente;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Getter@Setter @Column(name = "fecha")
    private Date fecha;

    @Temporal(TemporalType.TIME)
    @DateTimeFormat(pattern = "HH:mm")
    @Getter@Setter @Column(name = "hora")
    private String hora;

    @Getter@Setter @Column(name = "tipo")
    private String tipo;

    @Getter@Setter @Column(name = "estado")
    private Boolean estado;


}
