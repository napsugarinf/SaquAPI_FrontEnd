import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpEventType} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

import { RoomData } from '../model/roomdata';
import { AdmindashboardService } from '../service/admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  rooms?:RoomData[];
  myimageURL?:SafeUrl

  constructor(
    private router: Router,
    private apiService:AdmindashboardService,
    private sanitizer: DomSanitizer) { }

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
        this.rooms=data;
      })
  }

  imageLinkClickHandler(){
    this.apiService.getImage(4)
      .subscribe(
        data=>{
        console.log(data)
        switch(data.type){
          case HttpEventType.Response:
            if(data.body!==null){
              this.myimageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.body));
              Swal.fire({
                imageUrl: URL.createObjectURL(data.body) ,
                imageWidth: 400,
                imageHeight: 400,
                //imageAlt: 'Custom image',
              })
              
            }
            else{
              alert('Error: The image cannot be displayed!');
            }
        }
      })
  }

}
