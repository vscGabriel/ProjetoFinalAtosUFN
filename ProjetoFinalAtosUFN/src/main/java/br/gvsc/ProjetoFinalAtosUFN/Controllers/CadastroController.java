package br.gvsc.ProjetoFinalAtosUFN.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.gvsc.ProjetoFinalAtosUFN.Models.CadastroModel;
import br.gvsc.ProjetoFinalAtosUFN.Repositories.CadastroRepository;

@CrossOrigin
@RestController
@RequestMapping("/cliente")
public class CadastroController {
	@Autowired
	private CadastroRepository cadastroRepository;

	@GetMapping()
	public List<CadastroModel> getCadastro() {
		System.out.println("Entrou");
		return cadastroRepository.findAll();
	}	


	@GetMapping("/cadastrar/{usuario}/{email}/{senha}")
	@ResponseStatus(HttpStatus.CREATED)
	public boolean getVerifica_user(@PathVariable String usuario, @PathVariable String email, @PathVariable String senha) {
		Optional<CadastroModel> verifica_usuario = cadastroRepository.findByUsuario(usuario);     
		Optional<CadastroModel> verifica_email = cadastroRepository.findByEmail(email);     
		/* Optional<NewCadastroModel> email_usuario = newCadastroRepository.findByEmailAndUsuario(email, usuario); 
		 * */     
		if (verifica_usuario.isEmpty() && verifica_email.isEmpty() ) {        
			System.out.println("Usuario disponível para cadastro!"); 
			/*       verifica_usuario.setEmail(newCadastroModel.getEmail()); */       
			/* usuariomodel.setUsuario(newCadastroModel.getUsuario()); */        
			CadastroModel newcad = new CadastroModel();       
			newcad.setUsuario(usuario);       
			newcad.setEmail(email);      
			newcad.setSenha(senha);
			cadastroRepository.save(newcad);
			return true;   
			// return newCadastroRepository.save(usuariomodel.orElseThrow(() -> new Exception
		}else {
		      System.out.println("Não foi possível realizar o cadastro, o usuario " + usuario + " ou email " + email + " já existem!");
		      return false;
		    }
		}

}
