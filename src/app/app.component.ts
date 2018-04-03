import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import { Professor } from './professor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Conjunto de variáveis básicas Dados de uma ocorrencia**/
  matricula = null;
  nome = null;
  descricao = null;
  data = null;
  veio = false;
  tipo = null;
  // periodo = null;
  tipoocorrencia = null;
  nomeresp = null;

  disciplinas = this.getDisciplinasL();
  ultimocodigo = this.disciplinas.length;
  salvar_ok = null;
  editar_ok = null;
  excluir_ok = null;

  /* Dados parâmetros para manipulação da disciplina**/
  adicionando = false;
  selecionado = null;
  disciplina = null;
  editando = null;
  mostrando = false;


  salvar() {
    if (this.editando) {
      this.editando.matricula = this.matricula;
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
      this.editando.data = this.data;
      this.editando.veio = this.veio;
      this.editando.tipo = this.tipo;
      // this.editando.periodo = this.periodo;
      this.editando.tipoocorrencia = this.tipoocorrencia;
      this.editando.nomeresp = this.nomeresp;
      this.limpar();
      this.editar_ok = true;

    } else {
      // this.ultimocodigo = this.ultimocodigo + 1;
      // tslint:disable-next-line:max-line-length
      const d = new Disciplina(this.matricula, this.nome,  this.descricao, this.data, this.veio, this.tipo, this.tipoocorrencia, this.nomeresp);
      this.disciplinas.push(d);
      this.limpar();
      this.salvar_ok = true;

    }

    this.setLocalStorageDisciplinas(this.disciplinas);
  }

  excluir(disciplina) {

    if (this.editando === disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
        this.setLocalStorageDisciplinas(this.disciplinas);
      }
      this.limparAlertas();
      this.excluir_ok = true;
    }
  }

  editar(disciplina) {
    this.limparAlertas();
    this.mostrando = true;
    /** replicar dados literais da disciplina a ser editada nas variáveis base*/
    this.codigo = disciplina.codigo;
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.data = disciplina.data;
    this.veio = disciplina.veio;
    this.tipo = disciplina.tipo;
    // this.periodo = disciplina.periodo;
    this.tipoocorrencia = disciplina.tipoocorrencia;
    this.nomeresp = disciplina.nomeresp;

    this.editando = disciplina;
    this.adicionando = true;
  }

  /** resetar dados iniciais da aplicação, nome, descricao, data, tipo, periodo etc...
   * negar que está editando e adicionando
   */
  limpar() {
    this.codigo = null;
    this.nome = null;
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

  tipoPrimario() {
    this.tipo = true;
  }

  tipoSecundario() {
    this.tipo = false;
  }

  public getDisciplinasL(): Disciplina[] {
    const localStorageItem = JSON.parse(localStorage.getItem('disciplinas'));
    return localStorageItem == null ? [] : localStorageItem.disciplinas;
  }

  private setLocalStorageDisciplinas(disciplinas: Disciplina[]): void {
    localStorage.setItem('disciplinas', JSON.stringify({ disciplinas: disciplinas }));
  }



}
