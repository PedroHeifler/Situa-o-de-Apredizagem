import { Enderecos } from './endereco';
import { Usuarios } from './usuarios';

export class PessoaFisica {
    id: number;
    nome: String;
    sobrenome: String;
    cpf: String;
    telefone: String;
    celular: String;
    endereco:Enderecos;
    usuario:Usuarios;
}

export class PessoaJuridica {
    id: number;
    nome: String;
    responsavel: String;
    cnpj: String;
    telefone: String;
    celular: String;
    endereco:Enderecos;
    usuario:Usuarios;
   
}

