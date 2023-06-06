package com.proyectotesis.proyectopdc.HISTORIACLINICA.dao;

import com.proyectotesis.proyectopdc.HISTORIACLINICA.models.HistoriaClinica;
import com.proyectotesis.proyectopdc.INSUMO.models.Insumo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface HistoriaClinicaDao {

    List<HistoriaClinica> getHistoriasClinicas();

    void eliminarHistoriaClinica(int id);

    String registrarHistoriaClinica(HistoriaClinica historiaClinica);

    HistoriaClinica buscarHistoriaClinica(int id);

    void editarHistoriaClinica(int id, HistoriaClinica historiaClinica);

}
