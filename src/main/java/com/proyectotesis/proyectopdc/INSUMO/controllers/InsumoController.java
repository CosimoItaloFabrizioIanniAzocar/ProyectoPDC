package com.proyectotesis.proyectopdc.INSUMO.controllers;

import com.proyectotesis.proyectopdc.INSUMO.dao.InsumoDao;
import com.proyectotesis.proyectopdc.INSUMO.models.Insumo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class InsumoController {

    @Autowired
    private InsumoDao insumoDao;

    @RequestMapping(value = "api/getInsumos",method = RequestMethod.GET)
    public List<Insumo> getInsumos(){return insumoDao.getInsumos();}


    @RequestMapping(value = "api/eliminarInsumo/{id}",method = RequestMethod.DELETE)
    public void eliminarInsumo(@PathVariable int id) {insumoDao.eliminarInsumo(id);}

    @RequestMapping(value = "api/registrarInsumo",method = RequestMethod.POST)
    public void registrarInsumo(@RequestBody Insumo insumo) { insumoDao.registrarInsumo(insumo);}

    @RequestMapping(value = "api/actualizarCantidad/{id}",method = RequestMethod.PUT)
    public void actualizarCantidad(@PathVariable int id, @RequestBody Insumo insumo) { insumoDao.actualizarCantidad(id,insumo);}


}
