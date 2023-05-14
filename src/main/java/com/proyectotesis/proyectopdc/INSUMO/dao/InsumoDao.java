package com.proyectotesis.proyectopdc.INSUMO.dao;

import com.proyectotesis.proyectopdc.INSUMO.models.Insumo;
import java.util.List;

public interface InsumoDao {

    List<Insumo> getInsumos();

    void eliminarInsumo(int id);

    void registrarInsumo(Insumo insumo);

    void actualizarCantidad(int id, Insumo insumo);

    void estadoStock(int id);

}
