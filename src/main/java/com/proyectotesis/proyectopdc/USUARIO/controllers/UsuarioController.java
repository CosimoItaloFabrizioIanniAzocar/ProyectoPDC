package com.proyectotesis.proyectopdc.USUARIO.controllers;

import com.proyectotesis.proyectopdc.USUARIO.models.Usuario;
import com.proyectotesis.proyectopdc.USUARIO.dao.UsuarioDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping("api/usuarios")
    public List<Usuario> getUsuarios(){
    return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/registrar", method = RequestMethod.POST)
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
    public void eliminarUsuario(@PathVariable int id){usuarioDao.eliminar(id);}

    @RequestMapping("api/prueba3")
    public Usuario buscarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }


}
