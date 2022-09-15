import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StepperService } from '../../services/stepper.service';
import { Size } from '../../models';

@Component({
  selector: 'app-crud-size',
  templateUrl: './crud-size.component.html',
  styleUrls: ['./crud-size.component.scss']
})
export class CrudSizeComponent {
  newSize: Observable<Size>;

  constructor(private stepperSvc: StepperService) { }

  createNewSize() {
    const newSize = {
      label: 'H',
      size: '4XL',
      image: '../../../../assets/images/nft-hoodie.png'
    }
    this.stepperSvc.createSize(newSize, "7");
  }

  getNewSize(id: string) {
   this.newSize = this.stepperSvc.getById(id);
  }

  updateNewSize(id: string) {
    const updateSize = {
      label: 'H',
      size: '4XL',
      image: '../../../../assets/images/nft2.png'
    }
    this.stepperSvc.updateSize(updateSize, id);
  }

  deleteNewSize(id: string) {
    this.stepperSvc.deleteSize(id);    
  }

}
