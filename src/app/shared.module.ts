import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,  MatButtonModule, MatCheckboxModule, MatTableModule
  ],
  exports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule
  ],
  declarations: []
})
export class SharedModule { }
