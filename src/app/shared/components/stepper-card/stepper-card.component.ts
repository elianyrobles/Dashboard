import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [MaterialModule, CommonModule],
  selector: 'app-stepper-card',
  templateUrl: './stepper-card.component.html',
  styleUrls: ['./stepper-card.component.scss']
})

export class StepperCardComponent implements OnInit {
@Input() size: string;
@Input() label: string; 
@Output() selected = new EventEmitter<string>();

 
constructor() { }

  ngOnInit(): void {
  } 

emitSelection(size: string) {
  this.selected.emit(size);
}
  
}
