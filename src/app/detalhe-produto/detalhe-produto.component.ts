import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { produtos } from "../produtos";


@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.produto = produtos[+params.get("productId")];
      console.log(this.produto)
    });
  }

}
