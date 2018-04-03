
export class Disciplina {
    matricula: number;
    nome: string;
    descricao: string;
    data: Date;
    veio: boolean;
    tipo: boolean;
    tipoocorrencia: string;
    nomeresp: string;

    // tslint:disable-next-line:max-line-length
    constructor(matricula: number, nome: string,  descricao: string, data: Date, veio: boolean, tipo: boolean,  tipoocorrencia?: string, nomeresp?: string) {
      this.matricula = matricula;
      this.nome = nome;
      this.descricao = descricao;
      this.data = data;
      this.veio = veio;
      this.tipo = tipo;
      this.tipoocorrencia = tipoocorrencia;
    }
}
