import { Professor } from './professor.model';

export class Disciplina {
    codigo: number;
    nome: string;
    professor: Professor;
    descricao: string;

    constructor(codigo: number, nome: string, professor?: Professor, descricao?: string) {
      this.codigo = codigo;
      this.nome = nome;
      this.professor = professor;
      this.descricao = descricao;

    }
}
