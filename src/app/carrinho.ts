import { Produtos } from './produtos';

export class Carrinho {
    id: Number;
    total_pedido: Number;
    valor_frete: Number;
    valor_unitario: Number;
    produto_id: Produtos;
    quantidade: Number;
}