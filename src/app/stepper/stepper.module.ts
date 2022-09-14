import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperHeaderComponent } from './presentational/stepper-header/stepper-header.component';
import { StepperComponent } from './container/stepper/stepper.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    StepperComponent,
    StepperHeaderComponent,
   
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class StepperModule { }
