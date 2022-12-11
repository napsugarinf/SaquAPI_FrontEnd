import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
import { RoomData } from 'src/app/model/roomdata';
import { RoomDataPic } from 'src/app/model/roomdatapic';
import { Observable, Subscriber } from 'rxjs';
import { SequenceEqualSubscriber } from 'rxjs/internal/operators/sequenceEqual';
import { FormControl, FormGroup } from '@angular/forms';
import { fromPromise } from 'rxjs/internal-compatibility';
import Swal from 'sweetalert2';
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
base64code!: any;
 
selectedFile! :File;

constructor( private userDashboardService: UserdashboardService, private router: Router, private http: HttpClient) { }

ngOnInit(): void {

  }

  // On file Select
onChange(event: any){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
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
}


  
photoUploadHandler(){
    this.userDashboardService.photoUpload(this.roomDataPic, this.selectedFile).subscribe(data => {
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

