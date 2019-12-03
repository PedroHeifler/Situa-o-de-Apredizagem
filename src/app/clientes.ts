export class PessoaFisica {
    id: number;
    nome: String;
    sobrenome: String;
    cpf: String;
    telefone: String;
    celular: String;
    endereco:number;
    usuario:number;
}

export class PessoaJuridica {
    id: number;
    nome: String;
    responsavel: String;
    cnpj: String;
    telefone: String;
    celular: String;
    endereco:number;
    usuario:number;
    //*fazer verificação de tipo de cliente com o radio selecionado
    //*tipo_cliente:''
}

