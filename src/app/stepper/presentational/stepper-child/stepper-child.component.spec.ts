import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperChildComponent } from './stepper-child.component';

describe('StepperChildComponent', () => {
  let component: StepperChildComponent;
  let fixture: ComponentFixture<StepperChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
