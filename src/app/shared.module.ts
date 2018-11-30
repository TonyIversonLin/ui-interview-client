import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatTabsModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ChartModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ChartModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: []
})
export class SharedModule { }
