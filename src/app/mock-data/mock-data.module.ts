import { CommonModule } from '@angular/common';
import { MockDataService } from './mock-data.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MockDataService
  ],
  declarations: []
})
export class MockDataModule { }
