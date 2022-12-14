import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { StepperService } from '../../services/stepper.service';
import { SizeOption } from '../../models';
import { Store } from '@ngrx/store';
import { saveSize } from '../../store/stepper.actions';
import { getSize } from '../../store/stepper.selector';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  title: string = 'First off. What size hoodie do you want to order? This question is required.*';
  subtitle: string = 'Below are the sizes we provide.';
  sizeOptions$: Observable<SizeOption[]>;
  public size$ = this.store.select(getSize)

  constructor(
    private _formBuilder: FormBuilder,
    private stepperSvc: StepperService,
    private store: Store
  ) {
    this.sizeOptions$ = this.stepperSvc.getAllSizes();
  }

  saveSize(event: string) {
    this.store.dispatch(saveSize({ size: event }));
  }

  goForward(stepper: MatStepper) {
    setTimeout(function () {
      stepper.next();
    }, 1000);
  }

}
