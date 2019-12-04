import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { PerfilPessoaService } from './perfil-pessoa.service';
import { PessoaJuridica, PessoaFisica } from '../clientes';
import * as Inputmask from "inputmask";
import { Alert } from 'selenium-webdriver';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Usuarios } from '../usuarios';
import { CadastroUsuarioService } from '../cadastro-usuario/cadastro-usuario.service';
import { EnderecoService } from '../endereco/endereco.service';


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


  router: Router;
  constructor(private usuario: CadastroUsuarioService ,private perfilPessoaService: PerfilPessoaService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.novoPessoaFisica = new PessoaFisica();
    this.novoPessoaJuridica = new PessoaJuridica();
    $('#pessoaJuridica').hide();
    $('#pessoaFisica').hide();
    Inputmask().mask(document.querySelectorAll("input"));
    this.getPessoaFisica();
    this.getPessoaJuridica();

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
          this.getPessoaJuridica()
        }
      )
      this.router.navigate(['/', 'endereco'])
      alert("Cadastro concluido!")
    }

  }

  getPessoaJuridica(): void {
    this.perfilPessoaService.getPessoaJuridicaS().subscribe(
      pessoajuridica => this.pessoajuridica = pessoajuridica);
  }

  onSubmitPessoaFisica(formulario: NgForm) {
    if (formulario.valid) {
      this.perfilPessoaService.criarPessoaFisica(this.novoPessoaFisica).subscribe(
        id => {
          this.novoPessoaFisica
          this.getPessoaFisica()
        }
      )
      this.router.navigate(['/', 'endereco'])
      alert("Cadastro concluido!")
    }
  }

  getPessoaFisica(): void {
    this.perfilPessoaService.getPessoaFisicaS().subscribe(
      pessoafisica => this.pessoafisica = pessoafisica);
  }
}

