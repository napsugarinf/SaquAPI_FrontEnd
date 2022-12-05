import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RoomData } from '../model/roomdata';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  rooms?:RoomData[];

  constructor(
    private router: Router,
    private apiService:UserService) { }

  ngOnInit(): void {
    this.refreshRooms()
  }

  changePasswordClickHandler(): void {
    this.router.navigateByUrl('/changepassword')
  }

  refreshRooms(){
    this.apiService.getAllData()
      .subscribe(data =>{
        console.log(data)
      })
  }

}
