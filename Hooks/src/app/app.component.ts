import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';
import { AfterComponent } from './after/after.component';
import { AfterviewComponent } from './afterview/afterview.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChangeComponent,
    FormsModule,
    AfterComponent,
    AfterviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, DoCheck {
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

  message = '';

  data = 'First';
  prevData = 'First';
  ngOnInit(): void {
    this.message = 'This is the value';
  }

  ngDoCheck(): void {
    if (this.data !== this.prevData) {
      console.log('Data changed', this.data);
      this.prevData = this.data;
    }
  }

  showHello = true;
}
