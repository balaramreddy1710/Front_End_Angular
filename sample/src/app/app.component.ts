import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  display = '';

  press(key: string): void {
    if (key === '=') {
      try {
        this.display = eval(this.display);
      } catch {
        this.display = 'Error';
      }
    } else if (key === 'C') {
      this.display = '';
    } else {
      this.display += key;
    }
  }
}
