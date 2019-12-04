import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Produtos } from "../produtos";
import { AnunciarService } from '../anunciar/anunciar.service';
import { Location } from '@angular/common';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../Carrinho';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: Produtos;
  novoCarrinho: Carrinho;
  carrinho: Carrinho = new Carrinho();

  constructor(
    private route: ActivatedRoute,
    private anunciarService: AnunciarService,
    private carrinhoService: CarrinhoService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getProduto(+params.get('productId'));
    });
    console.log(this.produto);
    
  }

  getProduto(id: Number) {
    this.anunciarService.getProduto(id).subscribe(
      produtos => this.produto = produtos);
  }

  back() {
    this._location.back();
  }

  enviarParaCarrinho(produtos: Produtos) {
    this.carrinho = new Carrinho();
    this.carrinho.produto = produtos.id;
    this.carrinho.valor_unitario = produtos.preco_unit;
    console.log(this.carrinho);
    
    this.carrinhoService.enviarParaCarrinho(this.carrinho).subscribe(
      id => {
        this.novoCarrinho
      }
    )
  }

  delete(produtoParaRemover: Produtos) {
    if (confirm('Deseja realmente remover o produto "' + produtoParaRemover.nome + '"?')) {
      this.anunciarService.deleteProduto(produtoParaRemover.id).subscribe(
        produto => {
          window.alert('Produto "' + produtoParaRemover.nome + '" excluído!');
          this.back();
        }
      );
    }
  }
}
