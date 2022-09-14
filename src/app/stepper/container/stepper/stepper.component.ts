import { Component, OnInit } from '@angular/core';
import { StepperCardComponent } from 'src/app/shared/components/stepper-card/stepper-card.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  title: string = 'First off. What size hoodie do you want to order? This question is required.*';
  subtitle: string = 'Below are the sizes we provide.';
  
  options = [
    {
      label: 'A',
      size: 'XS',
      imagePath: "../../../../assets/images/nft-hoodie.png"
    },
    {
      label: 'B',
      size: 'S',
      imagePath: "../../../../assets/images/nft2.png"
    },
    {
      label: 'C',
      size: 'M',
      imagePath: "../../../../assets/images/nft3.png"
    },
    {
      label: 'D',
      size: 'L',
      imagePath: "../../../../assets/images/nft4.png"
    },
    {
      label: 'E',
      size: 'XL',
      imagePath: "../../../../assets/images/nft5.png"
    },
    {
      label: 'F',
      size: '2XL',
      imagePath: "../../../../assets/images/nft6.png"
    },
    {
      label: 'G',
      size: '3XL',
      imagePath: "../../../../assets/images/nft7.png"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(event: string) {
    console.log('doSomehting event', event);

  }

  ellieCanReadCode(cap: boolean, excuse: string) {
    if (cap) {
      return excuse;
    } else {
      return `still don't believe it`
    }
  }


}
