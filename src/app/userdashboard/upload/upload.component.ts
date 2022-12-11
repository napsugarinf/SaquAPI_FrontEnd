import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpEventType} from '@angular/common/http';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
import { RoomData } from 'src/app/model/roomdata';
import { RoomDataPic } from 'src/app/model/roomdatapic';
import { Observable, Subscriber } from 'rxjs';
import { SequenceEqualSubscriber } from 'rxjs/internal/operators/sequenceEqual';
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
myImage!: Observable<any>;
base64code!: any;

roomDataPic= new RoomDataPic();
  constructor( private userDashboardService: UserdashboardService, 
    private router: Router) { }

  ngOnInit(): void {

  }

  // On file Select
  onChange1 = ($event: any) => {
    //this.selectedFile = <File>event.target.files[0];
    const target = $event.target as HTMLInputElement;
    const file : File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)


}

onChange(event: any) {
    this.selectedFile = event.target.files[0];
    this.userDashboardService.convertImage(this.selectedFile).subscribe(data =>{
        console.log(data);
        switch(data.type){
            case HttpEventType.Response:
              if(data.body!==null){
                console.log(data.body);
              }
            }      
    })
}

convertToBase64(file: File){
  const observable = new Observable((subscriber: Subscriber<any>) =>{
    this.readFile(file, subscriber)
  })

  observable.subscribe((data) => {
    console.log(data);
    this.myImage = data;
    this.base64code =data;
  })
}

readFile(file: File, subscriber: Subscriber<any>){
  const fileReader = new FileReader();
  //fileReader.readAsDataURL(file);
  fileReader.readAsArrayBuffer(file);
  fileReader.onload = () =>{
    subscriber.next(fileReader.result);
    subscriber.complete();
  }
  fileReader.onerror = () => {
    subscriber.complete()
  }
}

    photoUploadHandler():void {
      this.roomDataPic.roomNumber = 102;
      this.roomDataPic.fileInputStream = this.base64code;
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

