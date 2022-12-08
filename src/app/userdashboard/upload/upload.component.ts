import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
import { RoomData } from 'src/app/model/roomdata';
import { RoomDataPic } from 'src/app/model/roomdatapic';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
// Variable to store shortLink from api response

roomData! : RoomData[];
url?: String;

selectedFile!: File; // Variable to store file
roomDataPic= new RoomDataPic();
  constructor( private userDashboardService: UserdashboardService, 
    private router: Router) { }

  ngOnInit(): void {

  }

  // On file Select
  onChange(event: any) {
    this.selectedFile = <File>event.target.files[0];
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.url = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
}

// OnClick of button Submit
 photoUploadHandler():void {
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    this.roomDataPic.key = '2000';
    this.roomDataPic.roomNumber = 101;
    this.roomDataPic.coldWater = 159753;
    this.roomDataPic.hotWater = 147369;
    this.roomDataPic.fileInputStream = reader.result;
    this.userDashboardService.photoUpload(this.roomDataPic).subscribe(data => {
      console.log(data)
    })
 }

getRoomDataHandler() {
        this.userDashboardService.getRoomData()
          .subscribe(data =>{
            console.log(data)
            this.roomData=data;
          })

}
}

