import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnunciarService } from './anunciar.service'
@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit {

  produtos : [];

  newProduto : any;

  constructor(private anunciarService : AnunciarService){
    this.anunciarService = anunciarService;
  }

  ngOnInit(){
    this.getProdutos;
    this.newProduto = new Object();
  }

  getProdutos(): void{
    this.produtos = this.anunciarService.getProdutos();
  }

  onSubmitProduto(formulario:NgForm){
    if(formulario.valid){
      this.anunciarService.saveProdutos(this.newProduto);
      this.newProduto = new Object();
      this.getProdutos();
    }
  }

}
