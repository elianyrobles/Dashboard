import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperRoutingModule } from './stepper-routing.module';
import { StepperHeaderComponent } from './presentational/stepper-header/stepper-header.component';
import { StepperComponent } from './container/stepper/stepper.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudSizeComponent } from './container/crud-size/crud-size.component';
import { StoreModule } from '@ngrx/store';
import { stepperReducer } from './store/stepper.reducer';

@NgModule({
  declarations: [
    StepperComponent,
    StepperHeaderComponent,
    CrudSizeComponent,
   
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('stepper', stepperReducer),
    
  ]
})
export class StepperModule { }
