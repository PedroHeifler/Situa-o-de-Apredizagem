import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../usuarios';
import * as $ from 'jquery';
import { CadastroUsuarioService } from './cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  novoUsuario: Usuarios = new Usuarios();
  private usuarios : Usuarios[];

  constructor( private cadastroUsuarioService: CadastroUsuarioService) {
    
   }

  ngOnInit() {
    this.novoUsuario = new Usuarios();
  }

  onSubmitUsuario(formulario: NgForm) {
    if (formulario.valid) {
      this.cadastroUsuarioService.criarUsuario(this.novoUsuario).subscribe(
        id => {
          this.novoUsuario
        }
      )
    }
  }

  confirmarSenha(event : any) {
    if (event.target.value != this.novoUsuario.senha) {
      var b = document.getElementById("cadastrar"); 

      b.setAttribute("disabled", "disabled");
    }
  }

}
