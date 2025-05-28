import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-custom',
  imports: [HighlightDirective],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {}
