import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudSizeComponent } from './container/crud-size/crud-size.component';
import { StepperComponent } from './container/stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    component:  StepperComponent
  },
  {
    path: 'crud',
    component:  CrudSizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
