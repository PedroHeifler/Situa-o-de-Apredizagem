// export const produtos = [
//     {
//       nome: '',
//       preco_unit: '',
//       quantidade:'',
//       tipo: '',
//       moeda: '',
//       entrega: '',
//       descricao: '',
//       cidade: '',
//       estado: '',
//       pais: '',
//       cep: '',
//       imagem_produto: ''
//     },
//   ];

export class Produtos {
  id: number;
  nome: string;
  descricao: string;
  preco_unit: number;
  quantidade: number;
  categoria: string;
  moeda: string;
  entrega: string;
  pais: string;
  estado: string;
  cidade: string;
  cep: string;
}
