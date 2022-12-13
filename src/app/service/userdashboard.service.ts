import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../model/user';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { RoomData } from '../model/roomdata';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { RoomDataPic } from '../model/roomdatapic';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
  uploadURL = '${environment.apiUrl}/dashboard/user/save';

 // `${environment.apiUrl}/dashboard/user/change-password`
  constructor(private http: HttpClient) { }

  photoUpload(roomdatapic: RoomDataPic) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(roomdatapic);
    //console.log(body);
    return this.http.post<any>(`${environment.apiUrl}/dashboard/user/save`, body,{'headers': headers})
  }


public convertImage(file: Blob): Observable<HttpEvent<any>> {
  const formData = new FormData();
  formData.append('file', file);
  console.log(formData);
  return this.http.request(new HttpRequest(
    'POST',
    `http://127.0.0.1:5000/imageConvertToText`,
    formData,
    {
      reportProgress: true,
      responseType: 'text'
      
    }));
    
}


getRoomData(roomDataPic : RoomDataPic){
  console.log('get roomData data');

  return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-room-data?roomNumber=${roomDataPic.roomNumber}`)
}

}
