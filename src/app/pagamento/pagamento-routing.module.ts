import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPagamentoComponent } from './add-pagamento/add-pagamento.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AddPagamentoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
