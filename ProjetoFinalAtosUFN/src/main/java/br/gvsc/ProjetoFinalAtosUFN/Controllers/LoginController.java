package br.gvsc.ProjetoFinalAtosUFN.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gvsc.ProjetoFinalAtosUFN.Models.CadastroModel;
import br.gvsc.ProjetoFinalAtosUFN.Repositories.CadastroRepository;

@RestController
@RequestMapping("/login")
public class LoginController {
		@Autowired
		private CadastroRepository cadastroRepository;
	
		@GetMapping("/{email}/{senha}")
		public CadastroModel verificaLogin(@PathVariable String email, @PathVariable String senha) {
			Optional<CadastroModel> verifica = cadastroRepository.findByEmailAndSenha(email, senha);
			
			if(verifica == null) {
				System.out.println("Não cadastrado");
				System.out.println(email + "  " + senha);
				return null ; 
				
			}else {
				System.out.println(email + "  " + senha);

				System.out.println("UHUUUUULLL");
				return null;
			}
			
  
		}
	

}
