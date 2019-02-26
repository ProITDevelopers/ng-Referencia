import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/shared/interfaces/pagamento';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-pagamento',
  templateUrl: './add-pagamento.component.html',
  styleUrls: ['./add-pagamento.component.css']
})
export class AddPagamentoComponent implements OnInit {

  dadosPagamento: Pagamento = {
    valor: null,
    codigoRerecence: null
  };

  constructor(private apiPagamento: PagamentoService,
              private snackBar: MatSnackBar) { }

  efectuarPagamento(formPagamento: NgForm): void {
    this.apiPagamento.postPagamento(this.dadosPagamento).subscribe(
      res => {
        this.snackBar.open(`Simulação Efectuada Com Sucesso!`, `OK`, {
          duration: 5000,
          panelClass: ['alert-success']
        });
        console.log(this.dadosPagamento);
        this.dadosPagamento.valor = null;
        this.dadosPagamento.codigoRerecence = null;
      },
      err => {
        this.snackBar.open(`Ocorreu um erro a simular pagamento`, `OK`, {
          duration: 5000,
          panelClass: ['alert-danger']
        });
        console.log(this.dadosPagamento);
      }
    );
  }

  ngOnInit() {
  }

}
