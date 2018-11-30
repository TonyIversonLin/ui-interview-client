import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Chart } from 'angular-highcharts';

import { MockDataService } from '../mock-data/mock-data.service';
import { MockData } from '../mock-data/mock-data.model';
import { lineChart } from '../utility';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  @Input() property: string;
  @Input() title: string;
  chart: Chart;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    // this control the range of the x-axis to 20 value maximum
    const range = 20;
    let counter = 0;
    let shift = false;
    this.chart = lineChart(this.title);

    const streamOfData = this.mockDataService.subscribe('mockData');

    this.subscription =  streamOfData.subscribe((data: MockData[]) => {
      counter++;
      if (!shift && counter >= range) {shift = true; }
      // this will add new data set on the line chart when new value comes in
      const currentTime = Date.now();
      data.forEach((element, index) => {
        this.chart.addPoint([currentTime, parseFloat(element[this.property])], index, true, shift);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
