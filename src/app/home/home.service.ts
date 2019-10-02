import { Injectable } from '@angular/core';
import { produtos } from "../produtos";


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  constructor() { }

  getProdutos() {
    console.log(produtos);
    
    return produtos;

  }
}
