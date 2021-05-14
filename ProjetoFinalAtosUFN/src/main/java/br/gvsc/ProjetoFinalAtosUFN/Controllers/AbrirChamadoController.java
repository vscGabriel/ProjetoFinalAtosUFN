package br.gvsc.ProjetoFinalAtosUFN.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.gvsc.ProjetoFinalAtosUFN.Models.AbrirChamadoModel;
import br.gvsc.ProjetoFinalAtosUFN.Repositories.AbrirChamadoRepository;

@CrossOrigin
@RestController
@RequestMapping("/abrir")
public class AbrirChamadoController {
    @Autowired
    private AbrirChamadoRepository abr;

    @GetMapping()
    public List<AbrirChamadoModel> getChamado() {
        return abr.findAll();
    }

    @GetMapping("/chamar/{nome}/{email}/{data}/{chamado}/{telefone}")
    @ResponseStatus(HttpStatus.CREATED)
    public void postChamado(@PathVariable String nome, @PathVariable String email, @PathVariable String data,
            @PathVariable String chamado, @PathVariable String telefone) {

        AbrirChamadoModel newcham = new AbrirChamadoModel();
        newcham.setNome(nome);
        newcham.setEmail(email);
        newcham.setData(data);
        newcham.setChamado(chamado);
        newcham.setTelefone(telefone);
        abr.save(newcham);
        System.out.println("salvo");
    }

}
