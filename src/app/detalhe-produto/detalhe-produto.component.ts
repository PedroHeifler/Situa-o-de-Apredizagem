import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Produtos } from "../produtos";


@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto : Produtos[];
  constructor() { }

  ngOnInit() {
  }

}
