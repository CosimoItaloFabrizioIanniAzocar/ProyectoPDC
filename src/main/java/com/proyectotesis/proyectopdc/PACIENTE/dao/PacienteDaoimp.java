package com.proyectotesis.proyectopdc.PACIENTE.dao;

import com.proyectotesis.proyectopdc.CITA.models.Cita;
import com.proyectotesis.proyectopdc.PACIENTE.models.Paciente;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
@Transactional
public class PacienteDaoimp implements PacienteDao{

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
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
    public void registrarPacientes(Paciente paciente){entityManager.persist(paciente);}

    public  Paciente buscarPaciente(int id){return entityManager.find(Paciente.class,id);}
    @Override
    public void editarPaciente(@PathVariable int id, Paciente paciente) {
        entityManager.find(Paciente.class, id);
        entityManager.merge(paciente);
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<Cita> citasPaciente(int id) {
        String query = "FROM Cita WHERE idPaciente = :id";
        return (List<Cita>) entityManager.createQuery(query).setParameter("id", id).getResultList();
    }

}
