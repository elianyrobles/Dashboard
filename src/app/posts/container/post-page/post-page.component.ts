import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getPostById } from '../../store/posts.actions';
import { grabPostById } from '../../store/posts.selector';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  public postByID$ = this.store.select(grabPostById);

  postId = new FormControl('', [Validators.required]);

  constructor(private store: Store) { }

  getPostById() {
    let idObject = {
      id: this.postId.value
    }
    this.store.dispatch(getPostById(idObject));
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}

