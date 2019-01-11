import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { Referencia } from 'src/app/shared/interfaces/referencia';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-referencia',
  templateUrl: './add-referencia.component.html',
  styleUrls: ['./add-referencia.component.css']
})
export class AddReferenciaComponent implements OnInit {

  dadosReferencia: Referencia = {
    valor: null,
    dataExpiracao: '2019-01-13',
    entidade: 99976  ,
    infPessoal: {
      descricao: 'criando',
      nome: 'Media Rumo',
      telefone: '222-721-738',
      email: 'example@example.com',
    }
  };

  constructor(private apiReferencia: ReferenciaService,
              private snackBar: MatSnackBar) { }

  gerarReferencia(formReferencia: NgForm): void {
    this.apiReferencia.postReferencia(this.dadosReferencia).subscribe(
      res => {
        this.snackBar.open(`Referência Gerada com Sucesso!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-success']
        });
        console.log(this.dadosReferencia);
      },
      err => {
        this.snackBar.open(`Ocorreu um erro a gerar referência!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-danger']
        });
        console.log(this.dadosReferencia);
    });
  }

  ngOnInit() {
  }

}
