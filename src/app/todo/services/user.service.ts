import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.http.get<User>(url);
  }
}
