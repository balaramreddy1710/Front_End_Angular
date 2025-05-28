import { Injectable } from '@angular/core';
import { UserClass } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserClass;

  constructor() {
    this.user = new UserClass(1, 'John', 'johndoe@gmail.com');
  }

  getUser(): UserClass {
    return this.user;
  }

  toggleUserStatus(): void {
    this.user.toggleActive();
  }
}
