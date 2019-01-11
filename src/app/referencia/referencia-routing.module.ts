import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReferenciaComponent } from './add-referencia/add-referencia.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: AddReferenciaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciaRoutingModule { }
