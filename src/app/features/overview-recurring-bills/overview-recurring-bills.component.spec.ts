import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRecurringBillsComponent } from './overview-recurring-bills.component';

describe('OverviewRecurringBillsComponent', () => {
  let component: OverviewRecurringBillsComponent;
  let fixture: ComponentFixture<OverviewRecurringBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewRecurringBillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewRecurringBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
