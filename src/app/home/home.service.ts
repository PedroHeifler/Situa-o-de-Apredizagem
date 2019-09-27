import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  produtos = [
    {
      id: 1,
      nome: "Munitor Top",
      valor: "600,00",
      descricao: "Melhor munitor do mundo 8k ultra HD, mais de 1bilhao de cores",
      imagem: "monitor.jpg"
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      valor: "60,00",
      descricao: "Mouse Gamer RGB com 5000dpi e durabilidade de 10 milhoes de cliques",
      imagem: "mouse.jpg"
    },
    {
      id: 3,
      nome: "Teclado Top",
      valor: "300,00",
      descricao: "Teclado Mecanico com RGB, Melhor preco do Brasil",
      imagem: "teclado.jpg"
    },
    {
      id: 4,
      nome: "Gabinete Top",
      valor: "400,00",
      descricao: "Gabinete Transparente com cooler RGB Hiper Ventilacao",
      imagem: "gabinete-gamer-c3-tech-mt-g1000bk-preto.jpg"
    },
    {
      id: 5,
      nome: "Munitor Top",
      valor: "600,00",
      descricao: "Melhor munitor do mundo 8k ultra HD, mais de 1bilhao de cores",
      imagem: "monitor.jpg"
    },
    {
      id: 6,
      nome: "Mouse Gamer",
      valor: "60,00",
      descricao: "Mouse Gamer RGB com 5000dpi e durabilidade de 10 milhoes de cliques",
      imagem: "mouse.jpg"
    },
    {
      id: 7,
      nome: "Teclado Top",
      valor: "300,00",
      descricao: "Teclado Mecanico com RGB, Melhor preco do Brasil",
      imagem: "teclado.jpg"
    },
    {
      id: 8,
      nome: "Gabinete Top",
      valor: "400,00",
      descricao: "Gabinete Transparente com cooler RGB Hiper Ventilacao",
      imagem: "gabinete-gamer-c3-tech-mt-g1000bk-preto.jpg"
    },
  ]

  constructor() { }

  getProdutos() {
    return this.produtos
  }
}
