package com.proyectotesis.proyectopdc.dao;


import com.proyectotesis.proyectopdc.models.Paciente;

import java.util.List;

public interface PacienteDao {

    List<Paciente> getPacientes();

    void eliminarPaciente(int id);

    void registrarPacientes(Paciente paciente);

    Paciente buscarPaciente(int id);

    void editarPaciente(int id, Paciente paciente);
}


