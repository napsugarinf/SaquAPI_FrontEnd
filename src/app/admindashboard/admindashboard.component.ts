import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {HttpEventType} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

import { RoomData } from '../model/roomdata';
import { AdmindashboardService } from '../service/admindashboard.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  public roomNumber = LoginComponent.roomNr!
  rooms?:RoomData[];
  filterRoomNumber?:String;
  searchMessage = new String;
  searchResult?:RoomData[];
  selectRoom?:Number;
  @Output() onSelected = new EventEmitter<any>();

  constructor(
    private router: Router,
    private apiService:AdmindashboardService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(LoginComponent.roomNr!=99){
      this.router.navigateByUrl('/error');
    }
    else{
      this.refreshRooms()
      this.searchResult=[];
    }
    
  }

  changePasswordClickHandler(): void {
    this.router.navigateByUrl('/changepassword');
  }

  refreshRooms(){
    this.apiService.getAllData()
      .subscribe(data =>{
        console.log(data)
        this.rooms=data;
        this.searchResult=this.rooms;
      });
  }

  imageClickHandler(room:RoomData){
    let key = "0"
    if(room.key!==undefined){
      key=room.key;
    }
    console.log(key);
    this.apiService.getImage(key)
      .subscribe(
        data=>{
        console.log(data)
        switch(data.type){
          case HttpEventType.Response:
            if(data.body!==null){
              Swal.fire({
                imageUrl: URL.createObjectURL(data.body) ,
                imageWidth: "100%",
                imageHeight: "100%",
              })
            }
            else{
              alert('Error: The image cannot be displayed!');
            }
        }
      })
  }

  searchClickHandler() {
    if(this.rooms!==undefined ){
      if(Number(this.filterRoomNumber)>=100 && Number(this.filterRoomNumber)<200){
        this.searchResult=this.rooms.filter((it)=>{
          return it.roomNumber===Number(this.filterRoomNumber);
        });
        this.searchMessage="";
      }
      else{
        this.searchMessage="Not found room";
        this.searchResult=this.rooms.filter((it)=>{
          return it.roomNumber===Number(this.filterRoomNumber);
        });
      }
      
    }
  }
  selectRoomClickHandler(room:RoomData){
    this.apiService.setSelectRoom(room);
    this.router.navigateByUrl('/admindashboard/roomdata');
  }
  logoutClickHandler(): void{
    LoginComponent.roomNr =0;
    this.router.navigateByUrl('/login')
  }

}
