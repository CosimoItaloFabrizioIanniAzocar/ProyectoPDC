package com.proyectotesis.proyectopdc.USUARIO.dao;

import com.proyectotesis.proyectopdc.USUARIO.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(int id);

    void registrarUsuarios(Usuario usuario);

    boolean verificaCredenciales(Usuario usuario);
}


