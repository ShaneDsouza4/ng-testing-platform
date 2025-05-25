import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void {
    this._userService.getUser().subscribe(x => this.users = x);
  }

}
