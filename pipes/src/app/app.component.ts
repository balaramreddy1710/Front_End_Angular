import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
}
