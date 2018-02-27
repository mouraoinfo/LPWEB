export class Disciplina {
    cod: string;
    nome: string;
    descricao: string;

    constructor(cod: string, nome: string, descricao?: string) {
      this.cod = cod;
      this.nome = nome;
      this.descricao = descricao;
    }
  }