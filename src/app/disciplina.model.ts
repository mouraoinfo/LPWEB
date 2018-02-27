import { Professor } from './professor.model';

export class Disciplina {
    cod: string;
    nome: string;
    descricao: string;
    professor: Professor;

    constructor(cod: string, nome: string, descricao?: string, professor?: Professor) {
      this.cod = cod;
      this.nome = nome;
      this.descricao = descricao;
      this.professor = professor;
    }
}
