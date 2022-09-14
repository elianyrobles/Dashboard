import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperCardComponent } from './components/stepper-card/stepper-card.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [StepperCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [StepperCardComponent]
})
export class SharedModule { }
