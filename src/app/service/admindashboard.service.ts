import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../model/user';
import { environment } from 'src/environments/environment';
import { RoomData } from '../model/roomdata';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http: HttpClient) {
   }

  getAllData(){
    console.log('get all data');
    return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-all-data`)
  }

  /*getImage(key:number):Observable<HttpEvent<Blob>>{
    console.log('get image');
    return this.http.get<any>(
        `${environment.apiUrl}/dashboard/admin/get-image?key=${key}`
    )
  }*/

  getImage(key:number): Observable<HttpEvent<Blob>> {
    console.log('get image');
    return this.http.request(new HttpRequest(
      'GET',
      `${environment.apiUrl}/dashboard/admin/get-image?key=${key}`,
      null,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }

}