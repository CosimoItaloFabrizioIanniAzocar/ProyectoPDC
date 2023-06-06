package com.proyectotesis.proyectopdc.HISTORIACLINICA.controllers;

import com.proyectotesis.proyectopdc.HISTORIACLINICA.dao.HistoriaClinicaDao;
import com.proyectotesis.proyectopdc.HISTORIACLINICA.models.HistoriaClinica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HistoriaClinicaController {

    @Autowired
    private HistoriaClinicaDao historiaClinicaDao;

    @RequestMapping(value = "api/getHistoriasClinicas", method = RequestMethod.GET)
    public List<HistoriaClinica> getHistoriasClinicas(){
        return historiaClinicaDao.getHistoriasClinicas();
    }

    @RequestMapping(value = "api/registrarHistoriaClinica", method = RequestMethod.POST)
    public String registrarHistoriaClinica(@RequestBody HistoriaClinica historiaClinica){
        historiaClinicaDao.registrarHistoriaClinica(historiaClinica);
        return "success";
    }
    @RequestMapping(value = "api/buscarHistoriaClinica", method = RequestMethod.GET)
    public HistoriaClinica buscarHistoriaClinica(@RequestBody int id){
        return historiaClinicaDao.buscarHistoriaClinica(id);
    }




}
