import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;

  @Output() cancelRegister =  new EventEmitter();

model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  cancel() {
    console.log('cancel');
    this.cancelRegister.emit( false);
  }
  register() {
    this.authService.register(this.model).subscribe(next => {
      console.log('Register Successful');
    }, error => {
      console.log('Not register');
    }
    );
    console.log(this.model);
  }
  // tslint:disable-next-line:member-ordering
  debugger;

}
