import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Ng2TelInputModule} from 'ng2-tel-input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    Ng2TelInputModule
  ],
  exports: [
    FormsModule,
    Ng2TelInputModule
  ]
})
export class SharedModule { }
