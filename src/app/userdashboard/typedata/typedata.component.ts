import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typedata',
  templateUrl: './typedata.component.html',
  styleUrls: ['./typedata.component.scss']
})
export class TypedataComponent implements OnInit {
  constructor(private router: Router) {}


  ngOnInit(): void {
  }
  typeDataHandler(): void{
    this.router.navigateByUrl('/userdashboard')
  }
}
