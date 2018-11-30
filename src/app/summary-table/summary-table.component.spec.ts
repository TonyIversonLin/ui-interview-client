import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTableComponent } from './summary-table.component';
import { SharedModule } from '../shared.module';
import { MockDataModule } from '../mock-data/mock-data.module';

describe('SummaryTableComponent', () => {
  let component: SummaryTableComponent;
  let fixture: ComponentFixture<SummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MockDataModule],
      declarations: [ SummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
