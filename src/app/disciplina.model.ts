import { Aluno } from './aluno';

export class Disciplina {
    aluno: Aluno;
    nome: string;
    descricao: string;
    data: Date;
    veio: boolean;
    tipo: boolean;
    tipoocorrencia: string;
    nomeresp: string;

    // tslint:disable-next-line:max-line-length

    constructor(aluno: Aluno,  descricao: string, data: Date, veio: boolean, tipo: boolean,  tipoocorrencia?: string, nomeresp?: string) {
      this.aluno = aluno;
      this.descricao = descricao;
      this.data = data;
      this.veio = veio;
      this.tipo = tipo;
      this.tipoocorrencia = tipoocorrencia;
      this.nomeresp = nomeresp;
    }

    // tslint:disable-next-line:max-line-length
    /* constructor(matricula: number, nome: string,  descricao: string, data: Date, veio: boolean, tipo: boolean,  tipoocorrencia?: string, nomeresp?: string) {
      this.matricula = matricula;
      this.nome = nome;
      this.descricao = descricao;
      this.data = data;
      this.veio = veio;
      this.tipo = tipo;
      this.tipoocorrencia = tipoocorrencia;
      this.nomeresp = nomeresp;
    }*/
}
