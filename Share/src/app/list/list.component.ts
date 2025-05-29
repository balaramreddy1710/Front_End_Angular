import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  // @Input() carNames: string[] = [];

  carNames: string[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.carNames$.subscribe((names) => {
      this.carNames = names;
    });
  }
}
