import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  endereco = [
    {
      id: 1,
      pais: 'Brasil',
      estado: 'SC',
      cidade: 'Blumenau',
      bairro: 'Gloria',
      rua: 'Cruzeiro',
      cep: '43734821',
    },
    {
      id: 2,
      pais: 'Brasil',
      estado: 'SC',
      cidade: 'Joivile',
      bairro: 'Jesus',
      rua: 'Medeiro',
      cep: '23657890',
    },
    {
      id: 3,
      pais: 'Brasil',
      estado: 'SC',
      cidade: 'Blumenau',
      bairro: 'Velha',
      rua: 'Machado',
      cep: '43642754',
    }
  ];
  constructor() { }

  getEndereco() {
    return this.endereco;
  }
}

