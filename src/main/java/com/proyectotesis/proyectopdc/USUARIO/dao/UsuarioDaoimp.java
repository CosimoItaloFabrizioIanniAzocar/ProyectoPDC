package com.proyectotesis.proyectopdc.USUARIO.dao;

import com.proyectotesis.proyectopdc.USUARIO.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
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
        String query = "FROM Usuario WHERE nombre = :nombre";

        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("nombre",usuario.getNombre())
                .getResultList();
        if (lista.isEmpty()){
            return false;
        }

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String contrasenaHasheada = lista.get(0).getPassword();

        return argon2.verify(contrasenaHasheada,usuario.getPassword());

    }
}
