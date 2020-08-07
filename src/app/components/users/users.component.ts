import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User={
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { 
    
  }

  ngOnInit(): void {
      this.users = [
        {
        firstName: "Nathan",
        lastName: "Anthony",
        email: "nathan@gmail.com",
        isActive: true,
        registered: new Date('08/07/2020 08:30:00'),
        hide: true
    },
    {
        firstName: "Scott",
        lastName: "Anthony",
        email: "scott@yahoo.com",
        isActive: false,
        registered: new Date('08/05/2020 05:20:00'),
        hide: true
    },
    {
        firstName: "Eric",
        lastName: "Anthony",
        email: "eric@gmail.com",
        isActive: true,
        registered: new Date('07/015/2020 02:00:00'),
        hide: true
    }
  ];

    this.loaded = true
  }

  addUser(){
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
  }
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log("Form is not valid");
    }
    else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }


}
