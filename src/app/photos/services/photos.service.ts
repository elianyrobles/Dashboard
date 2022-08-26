import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotoById(id: string): Observable<Photo> {
    const url = 'https://jsonplaceholder.typicode.com/photos/' + id;
    console.log("hit");
    return this.http.get<Photo>(url);
    
    

}
}