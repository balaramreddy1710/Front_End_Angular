import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  itemList = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Banana',
    },
    {
      id: 3,
      name: 'Grape',
    },
    {
      id: 4,
      name: 'Dates',
    },
    {
      id: 5,
      name: 'Jackfruit',
    },
  ];

  title = 'Hello';
}
