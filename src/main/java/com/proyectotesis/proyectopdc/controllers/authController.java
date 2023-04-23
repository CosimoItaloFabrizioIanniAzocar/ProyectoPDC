package com.proyectotesis.proyectopdc.controllers;

import com.proyectotesis.proyectopdc.dao.UsuarioDao;
import com.proyectotesis.proyectopdc.models.Usuario;
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
