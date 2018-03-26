import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import { Professor } from './professor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Conjunto de variáveis básicas Dados de uma disciplina**/
  codigo = null;
  nome = null;
  descricao = null;
  data = null;
  isAtiva = null;
  tipo = null;
  periodo = null;




  /* Dados parâmetros para manipulação da disciplina**/
  adicionando = false;
  selecionado = null;
  disciplina = null;
  editando = null;
  mostrando = false;



  disciplinas = [
    new Disciplina( 1, 'Língua Portuguesa', 'O objetivo norteador da BNCC de Lín...', this.getDate(), 'Sim', 'Principal', '1'),


  ];
    ultimocodigo = this.disciplinas.length;

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;


    } else {
      this.ultimocodigo = this.ultimocodigo + 1;
      const d = new Disciplina(this.ultimocodigo, this.nome,  this.descricao, this.getDate(), this.isAtiva, this.tipo, this.periodo);
      this.disciplinas.push(d);
    }


    this.codigo = null;
    this.nome = null;
    this.descricao = null;
    this.editando = null;
    this.cancelar();
  }

  excluir(disciplina) {
    if (this.editando === disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
      }
    }
  }

  editar(disciplina) {
    /** replicar dados literais da disciplina a ser editada nas variáveis base*/
    this.codigo = disciplina.codigo;
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.data = disciplina.data;
    this.isAtiva = disciplina.isAtiva;
    this.tipo = disciplina.tipo;
    this.periodo = disciplina.periodo;

    this.editando = disciplina;
    this.adicionando = true;
  }

  /** resetar dados iniciais da aplicação, nome, descricao, data, tipo, periodo
   * negar que está editando e adicionando
   */
  cancelar() {
    this.codigo = null;
    this.nome = null;
    this.descricao = null;
    this.data = null;
    this.isAtiva = null;
    this.tipo = null;
    this.periodo = null;

    this.editando = null;
    this.adicionando = false;

  }

  adicionar() {
    this.adicionando = true;
    this.data = this.getDate();
  }

  naoadicionar() {
    this.adicionando = false;
  }

  getDate() {
    this.data = '26/03/2018';
    return this.data;
  }




}
