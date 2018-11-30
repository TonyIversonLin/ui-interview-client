import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatTabsModule } from '@angular/material';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ChartModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ChartModule,
    MatTabsModule
  ],
  declarations: []
})
export class SharedModule { }
