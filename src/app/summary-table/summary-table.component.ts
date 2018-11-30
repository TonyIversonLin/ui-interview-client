import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockDataService } from '../mock-data/mock-data.service';
import { RealTimeDataSource } from '../utility';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit, OnDestroy {

  title = 'Mock Funds';
  displayedColumns: string[] = ['fundName', 'pnl', 'cumulativePnl', 'return'];
  dataSource: RealTimeDataSource;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.dataSource = new RealTimeDataSource(this.mockDataService);
  }

  ngOnDestroy(): void {
    this.mockDataService.unsubscribe();
  }
}
