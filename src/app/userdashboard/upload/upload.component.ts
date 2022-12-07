import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
import { RoomData } from 'src/app/model/roomdata';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
// Variable to store shortLink from api response

roomData! : RoomData[];

shortLink: string = "";
loading: boolean = false; // Flag variable
file: any = null; // Variable to store file
  constructor( private userDashboardService: UserdashboardService, 
    private router: Router,
    private apiService:UserdashboardService) { }

  ngOnInit(): void {

  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
}

// OnClick of button Submit
 photoUploadHandler() {

 }

getRoomDataHandler() {
        this.apiService.getRoomData()
          .subscribe(data =>{
            console.log(data)
            this.roomData=data;
          })

}
}

