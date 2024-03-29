package com.proyectotesis.proyectopdc.USUARIO.controllers;

import com.proyectotesis.proyectopdc.USUARIO.models.Usuario;
import com.proyectotesis.proyectopdc.USUARIO.dao.UsuarioDao;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value ="api/usuarios" ,method = RequestMethod.GET)
    public List<Usuario> getUsuarios(){
    return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/registrar", method = RequestMethod.POST)
    public void registrarUsuarios(@RequestBody Usuario usuario){

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024,1,usuario.getPassword());
        usuario.setPassword(hash);

        usuarioDao.registrarUsuarios(usuario);
    }

    @RequestMapping(value ="api/editarUsuario/{id}" ,method = RequestMethod.PUT)
    public void editarUsuario(@PathVariable int id, @RequestBody Usuario usuario){
        usuario.setId(id);
        usuarioDao.editarUsuario(id,usuario);

    }

    @RequestMapping(value = "api/usuarios/{id}",method = RequestMethod.DELETE)
    public void eliminarUsuario(@PathVariable int id){usuarioDao.eliminar(id);}

    @RequestMapping(value ="api/buscarUsuario/{id}",method = RequestMethod.GET)
    public Usuario buscarUsuario(@PathVariable int id){
        return usuarioDao.buscarUsuario(id);
    }


}
