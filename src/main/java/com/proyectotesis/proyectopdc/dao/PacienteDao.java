package com.proyectotesis.proyectopdc.dao;


import com.proyectotesis.proyectopdc.models.Paciente;
import com.proyectotesis.proyectopdc.models.Usuario;

import java.util.List;

public interface PacienteDao {

    List<Usuario> getPacientes();

    void eliminarPaciente(int id);

    void registrarPacientes(Paciente paciente);

}


