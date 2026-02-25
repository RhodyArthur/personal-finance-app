import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPotsComponent } from './overview-pots.component';

describe('OverviewPotsComponent', () => {
  let component: OverviewPotsComponent;
  let fixture: ComponentFixture<OverviewPotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewPotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewPotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
