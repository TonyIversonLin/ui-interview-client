import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MockDataModule } from './mock-data/mock-data.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MockDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
