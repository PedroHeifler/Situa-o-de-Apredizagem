import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { CadastroPessoaService } from './cadastro-pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {
  clientes_fisico : [];
  clientes_juridico: [];

  newClientes_fisico : any;
  newClientes_juridico : any;
  
  constructor(private cadastroPessoaService : CadastroPessoaService ){
    this.cadastroPessoaService = cadastroPessoaService;
  }

  ngOnInit() {
    this.getClientes_fisico;
    this.newClientes_fisico = new Object();
    this.getClientes_juridico;
    this.newClientes_juridico = new Object();

    $('#pessoaJuridica').hide();
    $('#pessoaFisica').hide();

  }

  RadioFisicaOuJuridica(seletor, nome) {

    if (seletor.checked) {
      // tslint:disable-next-line: triple-equals
      if (nome == 'fisica') {
        $('#pessoaFisica').fadeIn();
        $('#pessoaJuridica').fadeOut();
      }
      // tslint:disable-next-line: triple-equals
      if (nome == 'juridica') {
        $('#pessoaJuridica').fadeIn();
        $('#pessoaFisica').fadeOut();
      }
    } else {
      $('#pessoaJuridica').fadeOut();
      $('#pessoaFisica').fadeOut();
    }
  }

  getClientes_fisico(): void{
    this.clientes_fisico = this.cadastroPessoaService.getClientes_fisico();
  }

  getClientes_juridico(): void{
    this.clientes_juridico = this.cadastroPessoaService.getClientes_juridico();
  }

  onSubmitClienteFisico(formulario:NgForm){
    if(formulario.valid){
      this.cadastroPessoaService.saveClientes_fisico(this.newClientes_fisico);
      this.newClientes_fisico = new Object();
      this.getClientes_fisico();
    }
    console.log(formulario.value)
  }
  
  onSubmitClienteJuridico(formulario:NgForm){
    if(formulario.valid){
      this.cadastroPessoaService.saveClientes_juridico(this.newClientes_juridico);
      this.newClientes_juridico = new Object();
      this.getClientes_juridico();
    }
  }
}

