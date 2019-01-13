import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { Referencia } from 'src/app/shared/interfaces/referencia';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-referencia',
  templateUrl: './add-referencia.component.html',
  styleUrls: ['./add-referencia.component.css'],
  providers: [DatePipe]
})
export class AddReferenciaComponent implements OnInit {
  hoje: any;
  dadosReferencia: Referencia = {
    valor: null,
    dataExpiracao: '2019-01-16',
    entidade: 99976  ,
    infPessoal: {
      descricao: 'criando',
      nome: 'Media Rumo',
      telefone: '222-721-738',
      email: 'example@example.com',
    }
  };

  constructor(private apiReferencia: ReferenciaService,
              private snackBar: MatSnackBar,
              private datePipe: DatePipe,
              private router: Router) {
            }

  gerarReferencia(formReferencia: NgForm): void {
    this.apiReferencia.postReferencia(this.dadosReferencia).subscribe(
      res => {
        this.snackBar.open(`Referência Gerada com Sucesso!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-success']
        });
        console.log(this.dadosReferencia);
        this.dadosReferencia.valor = null;
      },
      err => {
        this.snackBar.open(`Ocorreu um erro a gerar referência!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-danger']
        });
        console.log(this.dadosReferencia);
    });
  }

  onCancelar(){
    this.router.navigate['/principal']
  }

  private dataHoje(): Date {
    this.hoje = this.datePipe.transform(new Date, 'yyyy-MM-dd');
    return this.hoje;
  }
  ngOnInit() {
  }

}
