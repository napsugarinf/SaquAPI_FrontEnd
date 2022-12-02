import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import {User} from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  currentUser(user:User): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body);
    return this.http.post<any>(`${environment.apiUrl}/login`, body,{'headers': headers})
  }

  savePassword(user:User):Observable<any>{
    const headers ={ 'content-type': 'application/json'}
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.patch<any>(`${environment.apiUrl}/dashboard/user/change-password`, body,{'headers': headers})
  }

}
