import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/table';
import { MockDataService } from './mock-data/mock-data.service';

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


export function lineChart(title: string): Chart {
  const chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: title
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Fund 1',
      },
      {
        name: 'Fund 2',
      },
      {
        name: 'Fund 3',
      },
    ],
    time: {
      timezone: 'America/New_York'
    },
    xAxis: {
      type: 'datetime'
    }
  });

  return chart;
}
