import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-after',
  imports: [],
  templateUrl: './after.component.html',
  styleUrl: './after.component.css',
})
export class AfterComponent implements AfterContentInit {
  @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    this.messageElements.forEach((ele) => {
      console.log('Projected content', ele.nativeElement.textContent);
    });
  }
}
