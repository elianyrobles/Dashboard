import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss']
})
export class StepperHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
