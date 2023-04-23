package com.proyectotesis.proyectopdc.controllers;

import com.proyectotesis.proyectopdc.models.Usuario;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController

public class UsuarioController {


    @RequestMapping("/prueba/{id}")
    public Usuario getUser(@PathVariable long id){

        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }

    @RequestMapping("/prueba")
    public List<Usuario> getUsuarios(){

        List<Usuario> usuarios= new ArrayList<>();
        Usuario usuario = new Usuario();
        usuario.setId(1);
        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        Usuario usuario2 = new Usuario();
        usuario2.setId(2);
        usuario2.setNombre("Maria");
        usuario2.setPassword("5678");

        Usuario usuario3 = new Usuario();
        usuario3.setId(3);
        usuario3.setNombre("Catalina");
        usuario3.setPassword("9876");

        usuarios.add(usuario);
        usuarios.add(usuario2);
        usuarios.add(usuario3);
        return usuarios;
    }

    @RequestMapping("/prueba1")
    public Usuario editarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }

    @RequestMapping("/prueba2")
    public Usuario eliminarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }

    @RequestMapping("/prueba3")
    public Usuario buscarUsuario(){

        Usuario usuario = new Usuario();

        usuario.setNombre("Juan");
        usuario.setPassword("1234");

        return usuario;
    }


}
