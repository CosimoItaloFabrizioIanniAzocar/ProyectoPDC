package com.proyectotesis.proyectopdc.PACIENTE.controllers;


import com.proyectotesis.proyectopdc.CITA.models.Cita;
import com.proyectotesis.proyectopdc.HISTORIACLINICA.models.HistoriaClinica;
import com.proyectotesis.proyectopdc.PACIENTE.models.Paciente;
import com.proyectotesis.proyectopdc.PACIENTE.dao.PacienteDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PacienteController {

    @Autowired
    private PacienteDao pacienteDao;

    @RequestMapping(value = "api/getPacientes", method = RequestMethod.GET)
    public List<Paciente> getPacientes(){return pacienteDao.getPacientes();}
    @RequestMapping(value = "api/registrarPaciente", method = RequestMethod.POST)
    public void registrarPaciente(@RequestBody Paciente paciente){pacienteDao.registrarPacientes(paciente);}
    @RequestMapping(value = "api/pacientes/{id}",method = RequestMethod.DELETE)
    public void eliminarPaciente(@PathVariable int id){
        pacienteDao.eliminarPaciente(id);
    }
    @RequestMapping(value ="api/editarPaciente/{id}",method = RequestMethod.PUT)
    public void editarPaciente(@PathVariable int id, @RequestBody Paciente paciente){
        paciente.setIdPaciente(id);
        pacienteDao.editarPaciente(id, paciente);}
    @RequestMapping(value = "api/buscarPaciente/{id}",method = RequestMethod.GET)
    public Paciente buscarPaciente(@PathVariable int id){return pacienteDao.buscarPaciente(id);}

    @RequestMapping(value = "api/citasPaciente/{id}",method = RequestMethod.GET)
    public List<Cita> citasPaciente(@PathVariable int id) {return pacienteDao.citasPaciente(id);}

    @RequestMapping(value = "api/getNombrePaciente/{id}",method = RequestMethod.GET)
    public String getNombrePaciente(@PathVariable int id) {return pacienteDao.getNombrePaciente(id);}
    @RequestMapping(value = "api/getHistorias/{id}",method = RequestMethod.GET)
    public List<HistoriaClinica> getHistorias(@PathVariable int id) {return pacienteDao.historiasClinicasPaciente(id);}
}
