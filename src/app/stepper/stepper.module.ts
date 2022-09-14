import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperHeaderComponent } from './presentational/stepper-header/stepper-header.component';
import { StepperComponent } from './container/stepper/stepper.component';
import { SharedModule } from '../shared/shared.module';
import { StepperPageComponent } from './container/stepper-page/stepper-page.component';

@NgModule({
  declarations: [
    StepperComponent,
    StepperHeaderComponent,
    StepperPageComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    SharedModule
  ]
})
export class StepperModule { }
