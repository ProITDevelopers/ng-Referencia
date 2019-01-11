export interface Referencia {
  valor?: number;
  dataExpiracao: string | null;
  entidade: number;
  infPessoal: {
    descricao: string | null;
    nome: string | null;
    telefone: string | null;
    email: string | null;
  };
}
