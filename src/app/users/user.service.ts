import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { id: 1, name: "Shane" },
    { id: 2, name: "Seth" },
  ]

  constructor() { }

  getUser() {
    return of(this.users);
  }

}
