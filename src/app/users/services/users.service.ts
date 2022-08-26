import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<IUser> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.get<IUser>(url);
}
}
