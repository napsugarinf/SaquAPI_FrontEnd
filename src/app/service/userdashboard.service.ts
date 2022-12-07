import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../model/user';
import { environment } from 'src/environments/environment';
import { RoomData } from '../model/roomdata';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
  uploadURL = '${environment.apiUrl}/dashboard/user/save';
 // `${environment.apiUrl}/dashboard/user/change-password`
  constructor(private http: HttpClient) { }

photoUpload(){
  
}

// sendWaterMeterData(coldWaterValue?: Number):Observable<any>{
//   const headers ={ 'content-type': 'application/json'}
//   const body = JSON.stringify(coldWaterValue);
//   console.log(body);
//   return this.http.put<any>(`${environment.apiUrl}/dashboard/user/`, body,{'headers': headers})
// }
getRoomData(){
  console.log('get roomData data');
  return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-room-data?roomNumber=100`)
}

}
