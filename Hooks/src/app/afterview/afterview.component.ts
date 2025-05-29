import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-afterview',
  imports: [],
  templateUrl: './afterview.component.html',
  styleUrl: './afterview.component.css',
})
export class AfterviewComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }
}
