import { Aluno } from './aluno';

export class Ocorrencia {
    aluno: Aluno;
    descricao: string;
    data: Date;
    veio: boolean;
    tipo: boolean;
    tipoocorrencia: string;
    nomeresp: string;

    // tslint:disable-next-line:max-line-length
    constructor(aluno?: Aluno,  descricao?: string, data?: Date, veio?: boolean, tipo?: boolean,  tipoocorrencia?: string, nomeresp?: string) {
        this.aluno = aluno;
        this.descricao = descricao;
        this.data = data;
        this.veio = veio;
        this.tipo = tipo;
        this.tipoocorrencia = tipoocorrencia;
        this.nomeresp = nomeresp;
      }
}
