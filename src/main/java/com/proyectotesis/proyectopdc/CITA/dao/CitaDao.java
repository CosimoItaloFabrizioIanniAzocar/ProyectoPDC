package com.proyectotesis.proyectopdc.CITA.dao;

import com.proyectotesis.proyectopdc.CITA.models.Cita;

import java.util.List;

public interface CitaDao {
    List<Cita> getCitas();
    void eliminarCita(int id);
    void registrarCita(Cita cita);
    Cita buscarCita(int id);
    void editarCita(int id, Cita cita);

}

