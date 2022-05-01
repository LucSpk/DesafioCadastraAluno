import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Aluno } from './Aluno';
import { NotaService } from './nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  public vetorAlunos!: Aluno[];
  public aluno!: Aluno;
  public id!: number;

  constructor(private servico:NotaService) { }

  ngOnInit(): void {
    this.id = -1;
    this.aluno = new Aluno("",0,0);
    this.vetorAlunos = this.servico.listarTurama();
  }

  cadastrar() {
    this.servico.cadastraAluno(this.aluno);
    this.aluno = new Aluno("",0,0);
  }

  excluir(id:number) {
    this.servico.excluirAluno(id);
    this.id = -1;
  }

  editar(id:number) {
    this.id = id;
    this.aluno = new Aluno(
      this.vetorAlunos[id].getNome(),
      this.vetorAlunos[id].getNota01(),
      this.vetorAlunos[id].getNota02(),
    );
  }

  atualizar() {
    this.servico.alterarAluno(this.id, this.aluno);
    this.aluno = new Aluno("",0,0);
    this.id = -1;
  }

}
