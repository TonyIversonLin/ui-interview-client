import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MockDataModule } from './mock-data/mock-data.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SummaryTableComponent } from './summary-table/summary-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    SummaryTableComponent
  ],
  imports: [
    BrowserModule,
    MockDataModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
