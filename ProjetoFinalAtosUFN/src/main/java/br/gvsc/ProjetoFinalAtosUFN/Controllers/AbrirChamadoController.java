package br.gvsc.ProjetoFinalAtosUFN.Controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping("/chamar/{nome}/{email}/{data}/{chamado}")
    @ResponseStatus(HttpStatus.CREATED)
    public AbrirChamadoModel postChamado(@PathVariable AbrirChamadoModel chamado) {
        return abr.save(chamado);
    }

}
