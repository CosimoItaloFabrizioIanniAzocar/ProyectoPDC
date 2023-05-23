package com.proyectotesis.proyectopdc.CITA.dao;

import com.proyectotesis.proyectopdc.CITA.models.Cita;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
@Repository
@Transactional
public class CitaDaoimp implements CitaDao{
    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<Cita> getCitas() {
        String query = "FROM Cita";
        return entityManager.createQuery(query).getResultList();}
    @Override
    public void eliminarCita(int id) {
        Cita cita = entityManager.find(Cita.class,id);
        entityManager.remove(cita);
    }
    @Override
    public void registrarCita(Cita cita) {entityManager.persist(cita);}
    @Override
    public Cita buscarCita(int id) {return entityManager.find(Cita.class,id);}
    @Override
    public void editarCita(@PathVariable int id, Cita cita) {
        Cita citaExistente= entityManager.find(Cita.class, id);
        if(citaExistente!=null) {
            cita.setIdCita(id);
            entityManager.merge(cita);
        }
    }

    public void atenderCita(@PathVariable int id) {
        Cita cita = entityManager.find(Cita.class,id);
        cita.setEstado(true);
        entityManager.merge(cita);
    }
}
