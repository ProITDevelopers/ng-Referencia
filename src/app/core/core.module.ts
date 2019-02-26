import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { FirebaseModule } from './firebase.module';
import { DashboardComponent } from '../ui/dashboard/dashboard.component';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AddPagamentoComponent } from '../pagamento/add-pagamento/add-pagamento.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FirebaseModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [DashboardComponent]
})
export class CoreModule { }
