package com.proyectotesis.proyectopdc.HISTORIACLINICA.dao;

import com.proyectotesis.proyectopdc.HISTORIACLINICA.models.HistoriaClinica;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class HistoriaClinicaDaoimp implements HistoriaClinicaDao {

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<HistoriaClinica> getHistoriasClinicas() {
        String query = "FROM HistoriaClinica";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminarHistoriaClinica(int id) {

    }

    @Override
    public String registrarHistoriaClinica(HistoriaClinica historiaClinica) {
    entityManager.persist(historiaClinica);
    return "success";
    }

    @Override
    public HistoriaClinica buscarHistoriaClinica(int id) {return entityManager.find(HistoriaClinica.class, id);}

    @Override
    public void editarHistoriaClinica(int id, HistoriaClinica historiaClinica) {

    }

}
