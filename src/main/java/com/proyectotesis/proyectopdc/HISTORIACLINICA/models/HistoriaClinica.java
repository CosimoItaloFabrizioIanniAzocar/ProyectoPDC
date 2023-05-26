package com.proyectotesis.proyectopdc.HISTORIACLINICA.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Table(name = "historia_clinica")
@Entity
public class HistoriaClinica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_historiaclinica")
    private int idHistoriaClinica;
    @Getter @Setter@Column(name = "nombre_paciente")
    private String nombreYapellido;
    @Getter @Setter@Column(name = "edad")
    private String edad;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Getter@Setter @Column(name = "fecha_nacimiento")
    private Date fechaNacimiento;
    @Getter @Setter@Column(name = "direccion")
    private String direccion;
    @Getter @Setter@Column(name = "telefono")
    private String telefono;
    @Getter @Setter@Column(name = "correo")
    private String correo;
    @Getter @Setter@Column(name = "nombre_madre")
    private String nombreMadre;
    @Getter @Setter@Column(name = "nombre_padre")
    private String nombrePadre;
    @Getter @Setter@Column(name = "antecedentes_perinatales")
    private String antecedentesPerinatales;
    @Getter @Setter@Column(name = "antecedentes_patologicos_madre")
    private String antecedentesPatologicosMadre;
    @Getter @Setter@Column(name = "parto_instrumentalizado")
    private boolean partoInstrumentalizado;
    @Getter @Setter@Column(name = "forceps")
    private boolean forceps;
    @Getter @Setter@Column(name = "cesarea_programada")
    private boolean cesareaProgramada;
    @Getter @Setter@Column(name = "emergencia")
    private boolean emergencia;
    @Getter @Setter@Column(name = "porque_emergencia")
    private String porqueEmergencia;
    @Getter @Setter@Column(name = "edad_gestacional")
    private String edadGestacional;
    @Getter @Setter@Column(name = "peso")
    private float peso;
    @Getter @Setter@Column(name = "talla")
    private float talla;
    @Getter @Setter@Column(name = "cc")
    private float cc;
    @Getter @Setter@Column(name = "lloro_respiro_nacer")
    private boolean lloroRespiroNacer;
    @Getter @Setter@Column(name = "reanimacion")
    private boolean reanimacion;
    @Getter @Setter@Column(name = "porque_reanimacion")
    private String porqueReanimacion;
    @Getter @Setter@Column(name = "lactancia_materna")
    private boolean lactanciaMaterna;
    @Getter @Setter@Column(name = "formula")
    private boolean formula;
    @Getter @Setter@Column(name = "mixta")
    private boolean mixta;
    @Getter @Setter@Column(name = "alimentacion_complementaria")
    private boolean alimentacionComplementaria;
    @Getter @Setter@Column(name = "recordatorio_alimentacion")
    private String recordatorioAlimentacion;
    @Getter @Setter@Column(name = "desarrollo_psicomotor")
    private String desarrolloPsicomotor;
    @Getter @Setter@Column(name = "desarrollo_lenguaje")
    private String desarrolloLenguaje;
    @Getter @Setter@Column(name = "enfermedades_cronicas")
    private String enfermedadesCronicas;
    @Getter @Setter@Column(name = "antecedentes_familiares")
    private String antecedentesFamiliares;
    @Getter @Setter@Column(name = "intervencion_quirurgica")
    private String intervencionQuirurgica;
    @Getter @Setter@Column(name = "alergias_alimentos")
    private String alergiasAlimentos;
    @Getter @Setter@Column(name = "alergias_medicamentos")
    private String alergiasMedicamentos;
    @Getter @Setter@Column(name = "historial_vacunas")
    private String historialVacunas;
    @Getter @Setter@Column(name = "otros_antecedentes_no_mencionados")
    private String otrosAntecedentesNoMencionados;
    @Getter @Setter@Column(name = "motivo_consulta")
    private String motivoConsulta;
    @Getter @Setter@Column(name = "enfermedad_actual")
    private String enfermedadActual;
    @Getter @Setter@Column(name = "examen_fisico")
    private String examenFisico;
    @Getter @Setter@Column(name = "impresion_diagnostica")
    private String impresionDiagnostica;
    @Getter @Setter@Column(name = "tratamiento_medico")
    private String tratamientoMedico;
    @Getter @Setter@Column(name = "recomendaciones")
    private String recomendaciones;
    @Getter @Setter@Column(name = "medidas_preventivas")
    private String medidasPreventivas;
    @Getter @Setter@Column(name = "proxima_cita")
    private String proximaCita;

}
