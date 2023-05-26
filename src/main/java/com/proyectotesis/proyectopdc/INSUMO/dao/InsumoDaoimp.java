package com.proyectotesis.proyectopdc.INSUMO.dao;

import com.proyectotesis.proyectopdc.INSUMO.models.Insumo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
@Transactional
public class InsumoDaoimp implements InsumoDao{

    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    @Override
    public List<Insumo> getInsumos() {
        String query = "FROM Insumo";
        return entityManager.createQuery(query).getResultList();}
    @Override
    public void eliminarInsumo(int id) {
        Insumo insumo = entityManager.find(Insumo.class,id);
        entityManager.remove(insumo);}
    @Override
    public void registrarInsumo(Insumo insumo) {entityManager.persist(insumo);}
    @Override
    public void actualizarCantidad(@PathVariable int id, Insumo insumo) {
        Insumo insumoExistente= entityManager.find(Insumo.class, id);
        if(insumoExistente!=null) {
            insumo.setIdInsumo(id);
            insumo.setNombre(insumoExistente.getNombre());
            entityManager.merge(insumo);}
    }
    @Override
    public void estadoStock (@PathVariable int id) {
        Insumo insumo = entityManager.find(Insumo.class,id);
        insumo.setIdInsumo(id);
        insumo.setNombre(insumo.getNombre());
        insumo.setCantidad(insumo.getCantidad());
        if (insumo.getCantidad()<=0){
            insumo.setEstado("Agotado");
        }else if(insumo.getCantidad()<50){
            insumo.setEstado("Poco Stock");
        }else{
            insumo.setEstado("Suficiente");
        }
        entityManager.merge(insumo);
    }
    @Override
    public Insumo buscarInsumo(int id){return entityManager.find(Insumo.class,id);}
    @Override
    public void descuentoCantidad() {
        String query = "UPDATE Insumo SET cantidad = cantidad - 10";
        entityManager.createQuery(query).executeUpdate();
    }
}
