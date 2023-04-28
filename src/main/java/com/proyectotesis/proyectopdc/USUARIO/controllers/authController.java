package com.proyectotesis.proyectopdc.USUARIO.controllers;

import com.proyectotesis.proyectopdc.USUARIO.models.Usuario;
import com.proyectotesis.proyectopdc.USUARIO.dao.UsuarioDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class authController {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login (@RequestBody Usuario usuario) {

        if (usuarioDao.verificaCredenciales(usuario)) {
            return "OK";
        }
        return "ERROR";
    }

}
