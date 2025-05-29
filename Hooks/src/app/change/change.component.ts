import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change',
  imports: [FormsModule],
  templateUrl: './change.component.html',
  styleUrl: './change.component.css',
})
export class ChangeComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input() title = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      console.log('Items property changed', changes['items']);
    }
    if (changes['title']) {
      console.log('Title property changed', changes['title']);
    }
  }
}
