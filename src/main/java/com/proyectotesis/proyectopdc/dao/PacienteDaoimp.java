package com.proyectotesis.proyectopdc.dao;


import com.proyectotesis.proyectopdc.models.Paciente;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class PacienteDaoimp implements PacienteDao{

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<Paciente> getPacientes() {
        String query = "FROM Paciente";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminarPaciente(int id) {
        Paciente paciente = entityManager.find(Paciente.class,id);
        entityManager.remove(paciente);
    }

    @Override
    public void registrarPacientes(Paciente paciente){entityManager.merge(paciente);}

    public  Paciente getPaciente(int id){
        return entityManager.find(Paciente.class,id);
    }

}
