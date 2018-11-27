import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Component } from '@angular/core';
import { MockDataService } from './mock-data/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Mock Funds';

  constructor(private mockDataService: MockDataService) {
  }

  ngOnInit(): void {
    const streamOfData = this.mockDataService.subscribe('mockData');
    streamOfData.subscribe(data => {
      console.log('here is the mock data haha from tony wiring', data);
    });
  }

  ngOnDestroy(): void {
    this.mockDataService.unsubscribe();
  }

}
