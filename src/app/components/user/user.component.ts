import {Component, OnInit} from '@angular/core';
import {User} from '../../Models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    // Properties
    users: User[];

    // Methods
    constructor(){
        
    }

    ngOnInit(){

    }
}
