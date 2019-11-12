import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Inputmask from "inputmask";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Carrinho',
  templateUrl: './Carrinho.component.html',
  styleUrls: ['./Carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
  }

  OnClickCalcularFrete() {
    let random = Math.floor((Math.random() * 40) + 10);
    
    $("#frete").text("Frete: R$ " + random.toFixed(2));
  }
}
