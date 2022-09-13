import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperChildComponent } from './presentational/stepper-child/stepper-child.component';


@NgModule({
  declarations: [
    StepperChildComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule
  ]
})
export class StepperModule { }
