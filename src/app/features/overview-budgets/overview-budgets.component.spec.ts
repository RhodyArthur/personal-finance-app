import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBudgetsComponent } from './overview-budgets.component';

describe('OverviewBudgetsComponent', () => {
  let component: OverviewBudgetsComponent;
  let fixture: ComponentFixture<OverviewBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewBudgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
