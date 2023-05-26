package com.proyectotesis.proyectopdc.HISTORIACLINICA.dao;

import com.proyectotesis.proyectopdc.HISTORIACLINICA.models.HistoriaClinica;

import java.util.List;

public interface HistoriaClinicaDao {

    List<HistoriaClinica> getHistoriasClinicas();

    void eliminarHistoriaClinica(int id);

    void registrarHistoriaClinica(HistoriaClinica historiaClinica);

    HistoriaClinica buscarHistoriaClinica(int id);

    void editarHistoriaClinica(int id, HistoriaClinica historiaClinica);

}
