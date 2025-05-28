import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { CustomComponent } from './custom/custom.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  movies = ['X-Men', 'Harry Potter', 'Narnia', 'GodFather', 'Spiderman'];

  showMe = false;
}
