import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080/saquapi/rest/login"
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('$this.baseUrl')
  }
}
