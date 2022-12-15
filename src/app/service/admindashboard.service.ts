import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../model/user';
import { environment } from 'src/environments/environment';
import { RoomData } from '../model/roomdata';
import { UpdateData } from '../model/updatedata';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {
    selectRoom?:RoomData;

  constructor(private http: HttpClient) {
   }

  getAllData(){
    //console.log('get all data');
    return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-all-data`)
  }

  getImage(key:String): Observable<HttpEvent<Blob>> {
    //console.log('get image');
    return this.http.request(new HttpRequest(
      'GET',
      `${environment.apiUrl}/dashboard/admin/get-image?key=${key}`,
      null,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }

  setSelectRoom(value:RoomData){
    this.selectRoom=value;
  }

  getSelectRoom(){
    if(this.selectRoom===undefined){
        this.selectRoom={
            key: "",
            roomNumber: 0,
            date: new Date("2022-08-01"),
            coldWater: 0,
            hotWater: 0
        }
        return this.selectRoom;
    }
    else{
        return this.selectRoom;
    }
    
  }

  updateData(updateData:UpdateData):Observable<Message>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(updateData);
    //console.log("update data")
    //console.log(body);
    return this.http.patch<Message>(`${environment.apiUrl}/dashboard/admin/update-data`, body,{'headers': headers})
  }

}