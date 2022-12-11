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
    selectRoomNumber?:Number;

  constructor(private http: HttpClient) {
   }

  getAllData(){
    console.log('get all data');
    return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-all-data`)
  }

  getImage(key:String): Observable<HttpEvent<Blob>> {
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

  setSelectRoomNumber(value:Number){
    this.selectRoomNumber=value;
  }

  getSelectRoomNumber(){
    return this.selectRoomNumber;
  }

  getTextpython():Observable<HttpEvent<any>>{
    console.log('get text python');
    //return this.http.get<Text>(`http://127.0.0.1:5000/hello`);
    return this.http.request( new HttpRequest(
        'GET',
        `http://127.0.0.1:5000/hello`,
        null,
        {
            responseType: 'text',
            reportProgress: true
        }
    ))
  }

}