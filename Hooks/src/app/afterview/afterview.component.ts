import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-afterview',
  imports: [],
  templateUrl: './afterview.component.html',
  styleUrl: './afterview.component.css',
})
export class AfterviewComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit(): void {
    this.nameInput.nativeElement.focus();
  }

  private intervalId: any;
  counter: number = 0;
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
    console.log('Interval Id', this.intervalId);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    alert('Counter Stopped');
  }
}
