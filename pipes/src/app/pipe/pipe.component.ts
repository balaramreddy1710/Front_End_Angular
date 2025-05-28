import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  data = 'Hello World';
  list = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
  date = new Date();
  amount = 3400;
}
