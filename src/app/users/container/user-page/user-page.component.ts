import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getUserById } from '../../store/users.actions';
import { getName, grabUserById } from '../../store/users.selector';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public name$ = this.store.select(getName);
  public userByID$ = this.store.select(grabUserById);

  userId = new FormControl('', [Validators.required]);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  grabUserById() {
    let idObject = {
      id: this.userId.value
    }
    this.store.dispatch(getUserById(idObject));
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  testButton() {
    this.userByID$.subscribe(res => {
      console.log('res', res);
    })
    
    
  }
}
