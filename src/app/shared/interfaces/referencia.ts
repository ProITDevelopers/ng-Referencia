export interface Referencia {
  valor?: number;
  dataExpiracao: Date | any;
  entidade: number;
  infPessoal: {
    descricao: string | null;
    nome: string | null;
    telefone: string | null;
    email: string | null;
  };
}
