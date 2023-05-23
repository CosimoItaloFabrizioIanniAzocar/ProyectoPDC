package com.proyectotesis.proyectopdc.PACIENTE.dao;

import com.proyectotesis.proyectopdc.CITA.models.Cita;
import com.proyectotesis.proyectopdc.PACIENTE.models.Paciente;
import java.util.List;

public interface PacienteDao {

    List<Paciente> getPacientes();

    void eliminarPaciente(int id);

    void registrarPacientes(Paciente paciente);

    Paciente buscarPaciente(int id);

    void editarPaciente(int id, Paciente paciente);

    List<Cita> citasPaciente(int id);

    String getNombrePaciente(int id);
}


