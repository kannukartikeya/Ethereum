import { Component, OnInit } from '@angular/core';
import {User} from './user'
import {UserService} from './user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [
    new User(0,"Frieda","assets/images/scottish-terrier.jpeg",3,"Scottish Terrier","Lisco, Alabama"),
    new User(1,"Gina","assets/images/scottish-terrier.jpeg",3,"Scottish Terrier","Tooleville, West Virginia")
 
  ];
  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

  getUsers(){
  //  this._userService.getUsers()
  //  .then(users => this.users = users)
  }


}
