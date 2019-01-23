import { Component, OnInit } from '@angular/core';
import { ReferenciaService } from 'src/app/services/referencia.service';
import { Referencia } from 'src/app/shared/interfaces/referencia';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-referencia',
  templateUrl: './add-referencia.component.html',
  styleUrls: ['./add-referencia.component.css'],
  providers: []
})
export class AddReferenciaComponent implements OnInit {
  hoje = new Date;
  minDate = new Date(this.hoje.setDate(this.hoje.getDate() + 2));
  estado = false;

  dadosReferencia: Referencia = {
    valor: null,
    dataExpiracao: 'this.transformaData()',
    infPessoal: {
      descricao: 'MediaRumo',
      nome: null,
      telefone: '+244',
      email: 'example@example.com',
    }
  };

  constructor(private apiReferencia: ReferenciaService,
              private snackBar: MatSnackBar) {}

  gerarReferencia(formReferencia: NgForm): void {
    this.apiReferencia.postReferencia(this.dadosReferencia).subscribe(
      res => {
        const objecto = JSON.stringify(res);
        const resposta = JSON.parse(objecto);
        this.snackBar.open(`A sua referência gerada é: ` + resposta.referencia, `OK`, {
          duration: 5000,
          panelClass: ['alert-success']
        });
        console.log(this.dadosReferencia);
        this.dadosReferencia.valor = null;
        this.dadosReferencia.dataExpiracao = null;
        this.dadosReferencia.infPessoal.nome = null;
        this.dadosReferencia.infPessoal.telefone = '+244';
      },
      err => {
        this.snackBar.open(`Ocorreu um erro a gerar referência!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-danger']
        });
        console.log(this.dadosReferencia);
    });
  }

  telInputObject(obj) {
    console.log(obj);
    obj.intlTelInput('setCountry', 'ao');
  }

  addDays(date: Date, dias: number): Date {
    date.setDate(date.getDate() + dias);
    return date;
  }
  transformaData() {
    return this.addDays(this.hoje, 2).toLocaleDateString;
  }

  ngOnInit() {
  }

}
