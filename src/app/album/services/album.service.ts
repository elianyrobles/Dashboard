import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbum(): Observable<Album> {
    const url = 'https://jsonplaceholder.typicode.com/photos/1';
    return this.http.get<Album>(url);
  }

  getAlbumById(id: string): Observable<Album> {
    const url = 'https://jsonplaceholder.typicode.com/photos/' + id;
    return this.http.get<Album>(url);
  }
}
