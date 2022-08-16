import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser, getUserById } from '../../store/todo.actions';
import { getEntireUser, getUserTitle}  from '../../store/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public userTitle$ = this.store.select(getUserTitle); // bonus: debug
  public user$ = this.store.select(getEntireUser);
  public userById$ = this.store.select(getUserById);
 


  constructor(private store: Store) { }

  getUser() {
    this.store.dispatch(getUser());
  }

  getUserById() {
    let idObject = {
      id: 2
    }
    this.store.dispatch(getUserById(idObject));
  }
}
