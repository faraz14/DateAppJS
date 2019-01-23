import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  model: any;
  registerMode = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   }

  registerToggle() {
    this.registerMode = true;
  }
 
  // tslint:disable-next-line:member-ordering
  debugger;
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
