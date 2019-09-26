import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  show: boolean = true

  constructor() { }

  ngOnInit() {
  }

  onClick(seletor) {
    $(seletor).toggleClass("active")
    $(".animacaoHover").not(seletor).removeClass("active")
    console.log(seletor);
    this.show = false
  }
}

export class NgIfSimple {
}