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

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
  uploadURL = '${environment.apiUrl}/dashboard/user/save';

 // `${environment.apiUrl}/dashboard/user/change-password`
  constructor(private http: HttpClient) { }

photoUpload(roomDataPic : RoomDataPic):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(roomDataPic);
    console.log(body);
    return this.http.post<any>(`${environment.apiUrl}/dashboard/user/save`, body,{'headers': headers})
}
// uploadFile(file: File, roomDataPic: RoomDataPic): Observable<HttpEvent<any>> {

//   let formData = new FormData();
//   formData.append('upload', file);

//   let params = new HttpParams();

//   const options = {
//     params: params,
//     reportProgress: true,
//   };

//   const req = new HttpRequest('POST', url, formData, options);
//   return this.http.request(req);
// }

public convertImage(file: Blob): Observable<HttpEvent<any>> {
  const formData = new FormData();
  formData.append('file', file);

  return this.http.request(new HttpRequest(
    'POST',
    `http://127.0.0.1:5000/imageConvertToText`,
    formData,
    {
      reportProgress: true,
      responseType: 'text'
    }));
}


getRoomData(){
  console.log('get roomData data');

  return this.http.get<RoomData[]>(`${environment.apiUrl}/dashboard/admin/get-room-data?roomNumber=102`)
}
//${LoginComponent.getUser.roomNumber}
}
