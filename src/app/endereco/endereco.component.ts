import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EnderecoService } from "./endereco.service";

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  show: boolean = true;
  enderecos: any;

  constructor(private service: EnderecoService) {
    this.enderecos = service.getEndereco();
    console.log(this.enderecos);

  }


  ngOnInit() {

  }

  onClick(seletor) {
    $(seletor).toggleClass("active")
    $(".animacaoHover").not(seletor).removeClass("active")
    console.log(seletor);
    this.show = false
  }
}