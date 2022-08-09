import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  user: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  httpRequest() {
    this.user = this.userService.getUser();
  }
}
