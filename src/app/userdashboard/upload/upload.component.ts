import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
import { RoomData } from 'src/app/model/roomdata';
import { RoomDataPic } from 'src/app/model/roomdatapic';
import { Observable, ReplaySubject, Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/service/user.service';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
// Variable to store shortLink from api response

//for listing elements
roomData! : RoomData[];
roomDataPic = new RoomDataPic();
//selectedFile!: File; // Variable to store file
myImage!: Observable<any>;
imageURL: any;
base64code!: any;
public roomNNN = LoginComponent.roomNr!
selectedFile! :File;

constructor( private userDashboardService: UserdashboardService, private userService: UserService, private router: Router, private http: HttpClient) { }

ngOnInit(): void {

  }

  // On file Select
onChange(event: any){
    this.selectedFile = event.target.files[0]; 
    console.log(this.selectedFile);
   
    this.convertToBase64(this.selectedFile);
    if(this.selectedFile!==null){
      Swal.fire({
        imageUrl: URL.createObjectURL(this.selectedFile) ,
        imageWidth: "100%",
        imageHeight:  "100%",
        //imageAlt: 'Custom image',
      })     

    }
    else{
      alert('Error: The image cannot be displayed!');
    }
    //image processing should come here
}
convertToBase64(file:File) {
  const observable = new Observable((subsriber: Subscriber<any>) => {
    this.readFile(file, subsriber)
  })

  observable.subscribe((base64Data) => {
  //console.log(base64Data)
  this.myImage = base64Data
  this.base64code = base64Data;
})

}

readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.onload = () => {
    subscriber.next(filereader.result)
    subscriber.complete()
  }
  filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
  }
}
  
photoUploadHandler(){
  this.roomDataPic.roomNumber = LoginComponent.roomNr!
  //console.log(this.roomDataPic.roomNumber)
  //console.log(this.roomDataPic.coldWater)
  console.log(this.roomDataPic.hotWater)
  console.log(this.base64code)
  this.roomDataPic.base64StringImage = this.base64code
   console.log(this.roomDataPic.base64StringImage)
    this.userDashboardService.photoUpload(this.roomDataPic).subscribe(data => {
     console.log(data)
    })
 }
 
getRoomDataHandler() {
        this.userDashboardService.getRoomData(this.roomDataPic)
          .subscribe(data =>{
            console.log(data)
            this.roomData=data;
          })

}



}