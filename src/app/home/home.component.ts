import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import * as $ from 'jquery';
import { Produtos } from '../produtos';
import { AnunciarService } from '../anunciar/anunciar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private produtos: Produtos[];

  constructor(private anunciaService: AnunciarService) {

  }

  public ngOnInit() {
    this.getProduto();
  }

  getProduto(): void {
    this.anunciaService.getProdutos().subscribe(
      produtos => this.produtos = produtos);
  }
}
