import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { ReferenciaRoutingModule } from './referencia-routing.module';
import { ViewReferenciaComponent } from './view-referencia/view-referencia.component';
import { AddReferenciaComponent } from './add-referencia/add-referencia.component';

@NgModule({
  declarations: [ViewReferenciaComponent, AddReferenciaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReferenciaRoutingModule
  ],
  exports: []
})
export class ReferenciaModule { }
