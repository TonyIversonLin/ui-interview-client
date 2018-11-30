import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void { }

  ngOnDestroy(): void {}
}
