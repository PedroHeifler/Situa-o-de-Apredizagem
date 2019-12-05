import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { ActivatedRoute } from '@angular/router';
import { AnunciarService } from '../anunciar/anunciar.service';
import { Carrinho } from '../carrinho';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
   
  carrinho: Carrinho;
  constructor(
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getCarrinho(+params.get('id'));
    });
  }

  escolhaPagamento(seletor){
    $(seletor).toggleClass("bordaPagamentoAtivo")
    $('.tipoPagamento a').not(seletor).removeClass('bordaPagamentoAtivo')
  }
  getCarrinho(id: Number) {
    this.carrinhoService.getCarrinho(id).subscribe(
      carrinho => this.carrinho = carrinho);
      console.log(this.carrinho);
      
  }
    
    

}
