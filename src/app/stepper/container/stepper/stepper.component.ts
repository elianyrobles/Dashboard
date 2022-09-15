import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { StepperService } from '../../services/stepper.service';
import { Size } from '../../models';

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
  sizeOptions$: Observable<Size[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private stepperSvc: StepperService
    ) {
      this.sizeOptions$ = this.stepperSvc.getAllSizes();
    }

  doSomething(event: string) {
    console.log('doSomehting event', event);
  }

}
