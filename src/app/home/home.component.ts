import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { DetalheProdutoComponent } from '../detalhe-produto/detalhe-produto.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private homeService: HomeService) {
   
   }

  public ngOnInit() {
    
  }
}
