import { Injectable } from '@angular/core';
import { produtos } from '../produtos';


@Injectable()
export class AnunciarService {

  produtos = produtos;

  constructor() { }
  
  getProdutos() :any{
    return this.produtos;
  }

  saveProdutos(form:any){
    this.produtos.push(form);
  }
}
