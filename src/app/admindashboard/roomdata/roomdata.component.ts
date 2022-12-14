import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpEventType} from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

import { RoomData } from 'src/app/model/roomdata';
import { AdmindashboardService } from '../../service/admindashboard.service';
import { UpdateData } from 'src/app/model/updatedata';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-roomdata',
  templateUrl: './roomdata.component.html',
  styleUrls: ['./roomdata.component.scss']
})
export class RoomdataComponent implements OnInit {
  selectRoom?:RoomData;
  updateColdWater = "";
  updateHotWater = "";
  roomNumber=0;
  date = "";
  imgURL?:SafeUrl;
  updateData = new UpdateData;


  constructor(
    private router: Router,
    private apiService:AdmindashboardService,
    private sanitizer: DomSanitizer
  ) { 
    this.selectRoom=this.apiService.getSelectRoom();
  }

  ngOnInit(): void {
    if(LoginComponent.roomNr!=99){
      //this.router.navigateByUrl('/error');
    }
    else{
      if(this.selectRoom===undefined || this.selectRoom.roomNumber===undefined || this.selectRoom.date===undefined || this.selectRoom.key===undefined){
        this.roomNumber=0
        this.date="-";
      }
      else{
        this.roomNumber=this.selectRoom.roomNumber;
        this.date=String(this.selectRoom.date);
        this.updateColdWater=String(this.selectRoom.coldWater);
        this.updateHotWater=String(this.selectRoom.hotWater);
        this.displayImage(this.selectRoom.key)
      }
    }
  }

  displayImage(key:String){
    this.apiService.getImage(key)
      .subscribe(
        data=>{
        console.log(data)
        switch(data.type){
          case HttpEventType.Response:
            if(data.body!==null){
                this.imgURL=this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.body))
            }
            else{
              alert('Error: The image cannot be displayed!');
            }
        }
      })
  }
  
  saveUpdateClickHandler(){
    if(this.selectRoom?.coldWater!==undefined && (Number(this.updateColdWater)!==this.selectRoom.coldWater || Number(this.updateHotWater)!==this.selectRoom.hotWater)){
      this.updateData.coldWater=Number(this.updateColdWater);
      this.updateData.hotWater=Number(this.updateHotWater);
      this.updateData.key=this.selectRoom.key;
      console.log(this.updateData);
      this.apiService.updateData(this.updateData).subscribe(
        data =>{
          console.log(data);
          Swal.fire(
            'The data update is '+ data.message)
        }
      )
    }
  }

  backClickHandler(): void {
    this.router.navigateByUrl('/admindashboard');
  }

}
