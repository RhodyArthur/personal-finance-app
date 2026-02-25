import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPotFormComponent } from './new-pot-form.component';

describe('NewPotFormComponent', () => {
  let component: NewPotFormComponent;
  let fixture: ComponentFixture<NewPotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPotFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
