import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getAlbumById } from '../../store/album.actions';
import { getThumbnailUrl, grabAlbumById } from '../../store/album.selector';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  public thumbnailUrl$ = this.store.select(getThumbnailUrl);
  public albumByID$ = this.store.select(grabAlbumById);

  albumId = new FormControl('', [Validators.required]);

  constructor(private store: Store) { }

  getAlbumById() {
    let idObject = {
      id: this.albumId.value
    }
    this.store.dispatch(getAlbumById(idObject));
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
