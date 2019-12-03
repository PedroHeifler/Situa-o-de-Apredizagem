import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { PerfilPessoaService } from './perfil-pessoa.service';
import { PessoaJuridica, PessoaFisica } from '../clientes';
import * as Inputmask from "inputmask";


@Component({
  selector: 'app-perfil-pessoa',
  templateUrl: './perfil-pessoa.component.html',
  styleUrls: ['./perfil-pessoa.component.css']
})
export class PerfilPessoaComponent implements OnInit {

  novoPessoaJuridica: PessoaJuridica = new PessoaJuridica();
  private pessoajuridica: PessoaJuridica[];

  novoPessoaFisica: PessoaFisica = new PessoaFisica();
  private pessoafisica: PessoaFisica[];

  constructor(private perfilPessoaService : PerfilPessoaService ){
    this.perfilPessoaService = perfilPessoaService;
  }

  ngOnInit() {
    this.novoPessoaFisica = new PessoaFisica();
    this.novoPessoaJuridica = new PessoaJuridica;
    $('#pessoaJuridica').hide();
    $('#pessoaFisica').hide();
    Inputmask().mask(document.querySelectorAll("input"));

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

  onSubmitPessoaJuridica(formulario: NgForm) {
    if (formulario.valid) {
      this.perfilPessoaService.criarPessoaJuridica(this.novoPessoaJuridica).subscribe(
        id => {
          this.novoPessoaJuridica
        }
      )
    }
  }
  onSubmitPessoaFisica(formulario: NgForm) {
    if (formulario.valid) {
      this.perfilPessoaService.criarPessoaFisica(this.novoPessoaFisica).subscribe(
        id => {
          this.novoPessoaFisica
        }
      )
    }
  }
}

