import { Component, OnInit } from '@angular/core';
import { StepperCardComponent } from '../../../shared/components/stepper-card/stepper-card.component';

@Component({
  standalone: true,
  selector: 'app-stepper',
  imports: [StepperCardComponent],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  label = "A"
  size = "xs"

  constructor() { }

  ngOnInit(): void {
  }

}
