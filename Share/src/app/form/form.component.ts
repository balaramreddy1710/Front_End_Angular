import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  carName: string = '';
  // @Output() carAdded = new EventEmitter<string>();

  constructor(private carService: CarService) {}

  onSubmit() {
    console.log(this.carName);

    // this.carAdded.emit(this.carName);
    this.carService.addCarName(this.carName);
    this.carName = '';
  }
}
