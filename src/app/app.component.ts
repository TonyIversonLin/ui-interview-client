import { OnDestroy, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Component } from '@angular/core';
import { MockDataService } from './mock-data/mock-data.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Mock Funds';
  displayedColumns: string[] = ['fundName', 'pnl', 'cumulativePnl', 'return'];
  dataSource: RealTimeDataSource;
  // fund1dataSource: RealTimeDataSource;
  // fund2dataSource: RealTimeDataSource;
  // fund3dataSource: RealTimeDataSource;

  constructor(private mockDataService: MockDataService) {
  }

  ngOnInit(): void {
    const streamOfData = this.mockDataService.subscribe('mockData');
    streamOfData.subscribe(data => {
      // console.log(typeof data);
      // console.log('here is the mock data haha from tony wiring', data);
    });

    this.dataSource = new RealTimeDataSource(this.mockDataService);
    console.log('i am here', this.dataSource);

    // this.fund1dataSource = new RealTimeDataSource(this.mockDataService, 0);
    // this.fund2dataSource = new RealTimeDataSource(this.mockDataService, 1);
    // this.fund2dataSource = new RealTimeDataSource(this.mockDataService, 2);

  }

  ngOnDestroy(): void {
    this.mockDataService.unsubscribe();
  }



}

export class RealTimeDataSource extends DataSource<any> {

  constructor(private mockDataService: MockDataService) {
    super();
  }

  connect(): Observable<any> {
    return this.mockDataService.subscribe('mockData');
  }

  disconnect() {
    this.mockDataService.unsubscribe();
  }
}
