import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdashboardService } from 'src/app/service/userdashboard.service'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
// Variable to store shortLink from api response
shortLink: string = "";
loading: boolean = false; // Flag variable
file: any = null; // Variable to store file
  constructor( private userDashboardService: UserdashboardService) { }

  ngOnInit(): void {

  }
  // photoUploadHandler(): void{
  //   this.router.navigateByUrl('/userdashboard')
  // }
  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
photoUploadHandler() {
    this.loading = !this.loading;
    console.log(this.file);
    this.userDashboardService.uploadPhoto(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}





}
