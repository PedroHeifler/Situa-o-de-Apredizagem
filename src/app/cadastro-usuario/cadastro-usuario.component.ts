import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../usuarios';
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
    this.getUsuario();
  }

  getUsuario(): void{
    this.cadastroUsuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios);
    
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

}
