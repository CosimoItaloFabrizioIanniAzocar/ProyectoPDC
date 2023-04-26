package com.proyectotesis.proyectopdc.controllers;


import com.proyectotesis.proyectopdc.dao.PacienteDao;
import com.proyectotesis.proyectopdc.models.Paciente;
import com.proyectotesis.proyectopdc.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PacienteController {


    private PacienteDao pacienteDao;
    @RequestMapping("api/pacientes")
    public List<Usuario> getPacientes(){
        return pacienteDao.getPacientes();
    }

    @RequestMapping(value = "api/registrarPaciente", method = RequestMethod.POST)
    public void registrarPaciente(@RequestBody Paciente paciente){
        pacienteDao.registrarPacientes(paciente);
    }

    @RequestMapping(value = "api/pacientes/{id}",method = RequestMethod.DELETE)
    public void eliminarPaciente(@PathVariable int id){
        pacienteDao.eliminarPaciente(id);
    }

    @RequestMapping("api/prueba1")
    public String editarPaciente(){

        return "Metodo editar por hacer";
    }

    @RequestMapping("api/prueba3")
    public String buscarPaciente(){

        return "Metodo Buscar por hacer";
    }

}
