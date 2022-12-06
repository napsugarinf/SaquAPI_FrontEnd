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

  uploadPhoto(file : File):Observable<any> {
    const formData = new FormData();
  // //uploadURL = 'http://{{ip}}:8080/saquapi/api/dashboard/user/save';
  // const fd = new FormData();
  // fd.append('image', file, file.name);
  // this.http.post('http://localhost:8080/saquapi/api/dashboard/user/save', fd)
  // .subscribe(res => {console.log(res)})
        //(this.handleData)
       // .catch(this.handleError);
    // // Create form data
    // const formData = new FormData(); 
      
    // // Store form name as "file" with file data
    // formData.append("file", file, file.name);
      
    // // Make http post request over api
    // // with formData as req
     return this.http.post(this.uploadURL, formData)

   }

sendWaterMeterData(coldWaterValue?: Number):Observable<any>{
  const headers ={ 'content-type': 'application/json'}
  const body = JSON.stringify(coldWaterValue);
  console.log(body);
  return this.http.put<any>(`${environment.apiUrl}/dashboard/user/`, body,{'headers': headers})
}
}
