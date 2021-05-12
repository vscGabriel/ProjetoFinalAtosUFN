package br.gvsc.ProjetoFinalAtosUFN.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gvsc.ProjetoFinalAtosUFN.Models.CadastroModel;

@Repository
public interface CadastroRepository  extends JpaRepository<CadastroModel, Long>{

	 public Optional<CadastroModel> findByUsuario(String usuario);
	 public Optional<CadastroModel> findByEmail(String email);
	 public Optional<CadastroModel> findBySenha(String senha);
	  public Optional<CadastroModel> findByEmailAndSenha(String email, String senha);
	
}
