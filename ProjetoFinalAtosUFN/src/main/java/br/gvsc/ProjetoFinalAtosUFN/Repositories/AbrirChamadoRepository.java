package br.gvsc.ProjetoFinalAtosUFN.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gvsc.ProjetoFinalAtosUFN.Models.AbrirChamadoModel;


@Repository
public interface AbrirChamadoRepository  extends JpaRepository<AbrirChamadoModel, Long>{
    
}
