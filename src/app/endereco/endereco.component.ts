import { Component, OnInit } from '@angular/core';
import { Enderecos } from '../endereco';
import { NgForm } from '@angular/forms';
import { EnderecoService } from './endereco.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  novoEndereco : Enderecos = new Enderecos();
  private enderecos : Enderecos[];
  
  router: Router;
  constructor(private enderecoService: EnderecoService, router: Router) {
      this.router = router;
   }

  ngOnInit() {
    this.novoEndereco = new Enderecos();
    this.getEndereco;
  }
  getEndereco(): void{
    this.enderecoService.getEnderecos().subscribe(
      usuarios => this.enderecos = usuarios);
    
  }

  onSubmitEndereco(formulario: NgForm) {
    if (formulario.valid) {
      this.enderecoService.criarEndereco(this.novoEndereco).subscribe(
        id => {
          this.novoEndereco
        }
      )
      this.router.navigate(['/', 'perfil_pessoa'])
      alert("Endereço Cadastrado! Continuar para tela de dados pessoais...")
    }
  }

}