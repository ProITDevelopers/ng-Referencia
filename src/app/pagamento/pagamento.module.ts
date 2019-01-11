import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { AddPagamentoComponent } from './add-pagamento/add-pagamento.component';
import { ViewPagamentoComponent } from './view-pagamento/view-pagamento.component';

@NgModule({
  declarations: [AddPagamentoComponent, ViewPagamentoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PagamentoRoutingModule
  ],
  exports: [AddPagamentoComponent, ViewPagamentoComponent]
})
export class PagamentoModule { }
