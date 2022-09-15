import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper-card',
  templateUrl: './stepper-card.component.html',
  styleUrls: ['./stepper-card.component.scss']
})

export class StepperCardComponent implements OnInit {
@Input() size: string;
@Input() label: string; 
@Input() imagePath: string;
@Input() selectedSize: string;
@Output() selected = new EventEmitter<string>();

constructor() { }

  ngOnInit(): void {
  } 

emitSelection(size: string) {
  this.selected.emit(size);
}

}
