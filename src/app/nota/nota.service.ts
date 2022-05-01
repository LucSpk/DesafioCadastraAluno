import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})

export class NotaService {

  constructor() { }

  public vetorTurma: Aluno[] = [
    new Aluno("Lucas", 8.7, 7)
  ];

  public listarTurama() {
    return this.vetorTurma;
  }

  public cadastraAluno(aluno:Aluno) {
    this.vetorTurma.push(aluno);
  }

  public alterarAluno(id: number, aluno: Aluno) {
    this.vetorTurma[id] = aluno;
  }

  public excluirAluno(id: number) {
    this.vetorTurma.splice(id, 1);
  }

}
