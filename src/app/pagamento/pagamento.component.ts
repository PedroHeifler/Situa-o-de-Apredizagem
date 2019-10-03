import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  escolhaPagamento(seletor){
    $(seletor).toggleClass("bordaPagamentoAtivo")
    $('.tipoPagamento img').not(seletor).removeClass('bordaPagamentoAtivo')
  }

}
