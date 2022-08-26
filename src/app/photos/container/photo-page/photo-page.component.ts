import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getPhotoById } from '../../store/photos.actions';
import { getThumbnailUrl, grabPhotoById } from '../../store/photos.selector';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent {
  public thumbnailUrl$ = this.store.select(getThumbnailUrl);
  public photoByID$ = this.store.select(grabPhotoById);
 
  photoId = new FormControl('', [Validators.required]);

  constructor(private store: Store) {}
  
  getPhotoById() {
    let idObject = {
      id: this.photoId.value
    }
    this.store.dispatch(getPhotoById(idObject));
  }

  logSelector() {
    this.thumbnailUrl$.subscribe(res => {
      console.log('Comp selector', res);
    })
  }
  getErrorMessage() {
    return 'You must enter a value';
  }
}
