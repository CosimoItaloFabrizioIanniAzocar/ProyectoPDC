package com.proyectotesis.proyectopdc.CITA.controllers;


import com.proyectotesis.proyectopdc.CITA.dao.CitaDao;
import com.proyectotesis.proyectopdc.CITA.models.Cita;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CitaController {

    @Autowired
    private CitaDao citaDao;
    @RequestMapping(value ="api/getCitas",method = RequestMethod.GET)
    public List<Cita> getCita(){return citaDao.getCitas();}
    @RequestMapping(value = "api/registrarCita", method = RequestMethod.POST)
    public void registrarCita(@RequestBody Cita cita){
        cita.setEstado(false);
        citaDao.registrarCita(cita);}
    @RequestMapping(value = "api/citas/{id}",method = RequestMethod.DELETE)
    public void eliminarCita(@PathVariable int id){citaDao.eliminarCita(id);}
    @RequestMapping(value ="api/editarCita/{id}",method = RequestMethod.PUT)
    public void editarCita(@PathVariable int id, @RequestBody Cita cita){
        cita.setIdPaciente(id);
        citaDao.editarCita(id, cita);}
    @RequestMapping(value = "api/buscarCita/{id}",method = RequestMethod.GET)
    public Cita buscarCita(@PathVariable int id){return citaDao.buscarCita(id);}

    @RequestMapping(value = "api/citaAtendida",method = RequestMethod.PUT)
    public void citaAtendida(@RequestBody Cita cita){
        cita.setEstado(true);
        citaDao.editarCita(cita.getIdPaciente(), cita);
    }

}
