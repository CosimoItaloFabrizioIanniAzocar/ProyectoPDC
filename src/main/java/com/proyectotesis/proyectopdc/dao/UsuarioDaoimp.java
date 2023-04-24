package com.proyectotesis.proyectopdc.dao;

import com.proyectotesis.proyectopdc.models.Usuario;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional

public class UsuarioDaoimp implements UsuarioDao{

    @PersistenceContext
    private EntityManager entityManager;
    @Override
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(int id) {
        Usuario usuario = entityManager.find(Usuario.class,id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrarUsuarios(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public boolean verificaCredenciales(Usuario usuario) {
        String query = "FROM Usuario WHERE nombre = :nombre AND password = :password";

        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("nombre",usuario.getNombre()
                )
                .setParameter("password",usuario.getPassword())
                .getResultList();

        return !lista.isEmpty();

    }
}
