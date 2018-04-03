import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import { Professor } from './professor.model';
import { Ocorrencia } from './ocorrencia';
import { Aluno } from './aluno';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Conjunto de variáveis básicas Dados de um aluno**/
  matricula = null;
  // nome = null;


  /* Conjunto de variáveis básicas Dados de uma ocorrencia**/

  descricao = null;
  data = null;
  veio = false;
  tipo = null;
  // periodo = null;
  tipoocorrencia = null;
  nomeresp = null;

  ocorrencias = this.getOcorrenciasL();
  alunos = [new Aluno(123, 'Marcos Mourão'), new Aluno(124, 'Mari Caramello')];

  salvar_ok = null;
  editar_ok = null;
  excluir_ok = null;

  /* Dados parâmetros para manipulação da disciplina**/
  aluno = new Aluno (1, 'Sem Nome');
  adicionando = false;
  selecionado = null;
  ocorrencia = null;
  editando = null;
  mostrando = false;


  salvar() {
    if (this.editando) {
      this.editando.aluno.matricula = this.aluno.matricula;
      this.editando.aluno.nome = this.aluno.nome;
      this.editando.descricao = this.descricao;
      this.editando.data = this.data;
      this.editando.veio = this.veio;
      this.editando.tipo = this.tipo;


      this.editando.tipoocorrencia = this.tipoocorrencia;
      this.editando.nomeresp = this.nomeresp;
      this.limpar();
      this.editar_ok = true;

    } else {

      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:max-line-length

      const o = new Ocorrencia(this.aluno,  this.descricao, this.data, this.veio, this.tipo, this.tipoocorrencia, this.nomeresp);
      this.ocorrencias.push(o);
      this.limpar();
      this.salvar_ok = true;

    }

    this.setLocalStorageOcorrencias(this.ocorrencias);
  }

  excluir(ocorrencia) {

    if (this.editando === ocorrencia) {
      alert('Você não pode excluir uma ocorrencia que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a ocorrencia do aluno  "'
          + ocorrencia.nome + '"?')) {

        const i = this.ocorrencias.indexOf(ocorrencia);
        this.ocorrencias.splice(i, 1);
        this.setLocalStorageOcorrencias(this.ocorrencias);
      }
      this.limparAlertas();
      this.excluir_ok = true;
    }
  }

  editar(ocorrencia) {
    this.limparAlertas();
    this.mostrando = true;
    /** replicar dados literais da ocorrência a ser editada nas variáveis base*/
    // this.matricula = ocorrencia.matricula;
    // this.nome = ocorrencia.nome;
    this.aluno = ocorrencia.aluno;
    this.descricao = ocorrencia.descricao;
    this.data = ocorrencia.data;
    this.veio = ocorrencia.veio;
    this.tipo = ocorrencia.tipo;
    // this.periodo = disciplina.periodo;
    this.tipoocorrencia = ocorrencia.tipoocorrencia;
    this.nomeresp = ocorrencia.nomeresp;

    this.editando = ocorrencia;
    this.adicionando = true;
  }

  /** resetar dados iniciais da aplicação, nome, descricao, data, tipo, periodo etc...
   * negar que está editando e adicionando
   */
  limpar() {
    // this.matricula = null;
    // this.nome = null;
    this.aluno = null;
    this.descricao = null;
    this.data = null;
    this.veio = null;
    this.tipo = null;
    // this.periodo = null;
    this.tipoocorrencia = null;
    this.nomeresp = null;

    this.editando = null;
    this.mostrando = false;
    this.limparAlertas();
  }

  limparAlertas() {
    this.salvar_ok = null;
    this.editar_ok = null;
    this.excluir_ok = null;
  }



  adicionar() {
    this.limpar();
    // this.veio = true;
    this.mostrando = true;
    this.tipo = true;
  }


  compareceu() {
    this.veio = true;
  }

  public getOcorrenciasL(): Ocorrencia[] {
    const localStorageItem = JSON.parse(localStorage.getItem('ocorrencias'));
    return localStorageItem == null ? [] : localStorageItem.ocorrencias;
  }

  private setLocalStorageOcorrencias(ocorrencias: Ocorrencia[]): void {
    localStorage.setItem('ocorrencias', JSON.stringify({ ocorrencias: ocorrencias }));
  }


}
