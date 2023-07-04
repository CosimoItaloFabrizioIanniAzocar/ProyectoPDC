package com.proyectotesis.proyectopdc.UTILS.PAGOS;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ImagenRepository extends JpaRepository<PagosQr, Long> {

}