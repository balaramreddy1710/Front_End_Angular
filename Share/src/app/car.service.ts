import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  private carNamesSub = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNamesSub.asObservable();

  addCarName(name: string) {
    const currentNames = this.carNamesSub.getValue();
    const updatedNames = [...currentNames, name];

    this.carNamesSub.next(updatedNames);
  }
}
