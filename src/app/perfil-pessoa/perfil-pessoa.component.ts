import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { PerfilPessoaService } from './perfil-pessoa.service';
import { Pessoas } from '../pessoas';
import * as Inputmask from "inputmask";

@Component({
  selector: 'app-perfil-pessoa',
  templateUrl: './perfil-pessoa.component.html',
  styleUrls: ['./perfil-pessoa.component.css']
})
export class PerfilPessoaComponent implements OnInit {
 
  novoPessoa: Pessoas = new Pessoas();
  private pessoas: Pessoas[];
 
  
  constructor(private perfilPessoaService : PerfilPessoaService ){
    this.perfilPessoaService = perfilPessoaService;
    
  }

  ngOnInit() {
    this.novoPessoa = new Pessoas();
    Inputmask().mask(document.querySelectorAll("input"));
  }
  
  onSubmitPessoa(formulario: NgForm) {
    if (formulario.valid) {
      this.perfilPessoaService.criarPessoa(this.novoPessoa).subscribe(
        id => {
          this.novoPessoa
        }
      )
    }
  }
  
 
}

