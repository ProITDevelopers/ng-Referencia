import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  {
    path: 'principal',
    component: PrincipalComponent
  }, {
    path: 'referencia',
    loadChildren: './referencia/referencia.module#ReferenciaModule'
  }, { path: 'pagamento',
    loadChildren: './pagamento/pagamento.module#PagamentoModule'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
