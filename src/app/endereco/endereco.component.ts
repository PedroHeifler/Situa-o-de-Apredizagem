import { Component, OnInit } from '@angular/core';
import { Enderecos } from '../endereco';
import { NgForm } from '@angular/forms';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  novoEndereco : Enderecos = new Enderecos();
  private enderecos : Enderecos[];

  constructor(private enderecoService: EnderecoService) {
      this.enderecoService = enderecoService;
   }

  ngOnInit() {
    this.novoEndereco = new Enderecos();
    this.getEndereco;
  }
  getEndereco(): void{
    this.enderecoService.getEnderecos().subscribe(
      usuarios => this.enderecos = usuarios);
    
  }

  onSubmitUsuario(formulario: NgForm) {
    if (formulario.valid) {
      this.enderecoService.criarEndereco(this.novoEndereco).subscribe(
        id => {
          this.novoEndereco
        }
      )
    }
  }

}