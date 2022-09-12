import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  standalone: true,
  imports: [MaterialModule],
  selector: 'app-stepper-card',
  templateUrl: './stepper-card.component.html',
  styleUrls: ['./stepper-card.component.scss']
})

export class StepperCardComponent implements OnInit {
@Input() size: string;
@Input() label: string; 

  constructor() { }

  ngOnInit(): void {
  } 

}
