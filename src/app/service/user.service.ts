import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string ="http://localhost:8080/saquapi/api/login"
  constructor(private http: HttpClient) { }

  currentUser(user:User): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body);
    return this.http.post<any>(this.baseUrl, body,{'headers': headers})
  }

}
