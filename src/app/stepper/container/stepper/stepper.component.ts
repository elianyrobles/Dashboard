import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StepperCardComponent } from '../../../shared/components/stepper-card/stepper-card.component';

@Component({
  standalone: true,
  selector: 'app-stepper',
  imports: [StepperCardComponent, CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  options = [
    {
      label: 'A',
      size: 'XS'
    },
    {
      label: 'B',
      size: 'S'
    },
    {
      label: 'C',
      size: 'M'
    },
    {
      label: 'D',
      size: 'L'
    },
    {
      label: 'E',
      size: 'XL'
    },
    {
      label: 'F',
      size: '2XL'
    },
    {
      label: 'G',
      size: '3XL'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(event: string) {
    console.log('doSomehting event', event);

  }
}
