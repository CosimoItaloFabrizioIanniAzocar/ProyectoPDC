package com.proyectotesis.proyectopdc.controllers;


import com.proyectotesis.proyectopdc.dao.PacienteDao;
import com.proyectotesis.proyectopdc.models.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PacienteController {


    @Autowired
    private PacienteDao pacienteDao;

    @RequestMapping("api/prueba2")
    public List<String> prueba2(){

        return List.of("Probando","el","controlador","de","pacientes");
    }
    @RequestMapping("api/getPacientes")
    public List<Paciente> getPacientes(){return pacienteDao.getPacientes();}

    @RequestMapping(value = "api/registrarPaciente", method = RequestMethod.POST)
    public void registrarPaciente(@RequestBody Paciente paciente){
        pacienteDao.registrarPacientes(paciente);
    }

    @RequestMapping(value = "api/pacientes/{id}",method = RequestMethod.DELETE)
    public void eliminarPaciente(@PathVariable int id){
        pacienteDao.eliminarPaciente(id);
    }

    @RequestMapping("api/editarPaciente")
    public String editarPaciente(){

        return "Metodo editar por hacer";
    }

    @RequestMapping("api/buscarPaciente")
    public String buscarPaciente(){

        return "Metodo Buscar por hacer";
    }

}
