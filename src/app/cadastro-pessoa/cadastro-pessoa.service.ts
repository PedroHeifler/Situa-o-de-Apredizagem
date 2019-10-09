import { Injectable } from '@angular/core';
import { clientes_fisico } from '../clientes';
import { clientes_juridico } from '../clientes';

@Injectable({
  providedIn: 'root'
})
export class CadastroPessoaService {

  clientes_fisico = clientes_fisico;
  clientes_juridico = clientes_juridico;
  constructor() { }

  getClientes_fisico():any{
    return this.clientes_fisico;
  }
  
  getClientes_juridico():any{
    return this.clientes_juridico;
  }

  saveClientes_fisico(form:any){
    this.clientes_fisico.push(form);
  }

  saveClientes_juridico(form:any){
    this.clientes_juridico.push(form);
  }
}
