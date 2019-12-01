import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { Produtos } from "../produtos";
import * as $ from 'jquery';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit {

  novoProduto: Produtos = new Produtos();
  private produtos: Produtos[];

  constructor(private anunciarService: AnunciarService) { }

  ngOnInit() {
    this.novoProduto = new Produtos();
    //this.getProduto();
  }

  // getProduto(): void {
  //   this.anunciarService.getProdutos().subscribe(
  //     produtos => this.produtos = produtos);
  // }

  onSubmitProduto(formulario: NgForm) {
    if (formulario.valid) {
      this.anunciarService.criarProduto(this.novoProduto).subscribe(
        id => {
          this.novoProduto
        }
      )
    }
  }
}


