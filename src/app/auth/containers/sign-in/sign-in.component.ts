import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { signIn } from '../../store/auth.actions';
import { getUser } from '../../store/auth.selector';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public getUser$ = this.store.select(getUser);

  constructor(private store: Store) { }

 signIn(email: string, password: string) {
  this.store.dispatch(signIn({email, password}));
 }
}
