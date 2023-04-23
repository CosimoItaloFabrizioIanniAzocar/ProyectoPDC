package com.proyectotesis.proyectopdc.controllers;

import com.proyectotesis.proyectopdc.dao.UsuarioDao;
import com.proyectotesis.proyectopdc.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController

public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping("api/usuarios/{id}")
    public Usuario getUser(@PathVariable int id){

        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }

    @RequestMapping("api/usuarios")
    public List<Usuario> getUsuarios(){
    return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuarios(@RequestBody Usuario usuario){
        usuarioDao.registrarUsuarios(usuario);
    }

    @RequestMapping("api/prueba1")
    public Usuario editarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }

    @RequestMapping(value = "api/usuarios/{id}",method = RequestMethod.DELETE)
    public void eliminarUsuario(@PathVariable int id){

        usuarioDao.eliminar(id);

    }

    @RequestMapping("api/prueba3")
    public Usuario buscarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }


}
