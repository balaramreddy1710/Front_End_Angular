import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserClass } from './models/user.class';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user!: UserClass;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  toggleStatus(): void {
    this.userService.toggleUserStatus();
  }
}
