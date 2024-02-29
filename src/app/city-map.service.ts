import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityMapService {
  public coordinatesEmitter: EventEmitter<[number, number]> = new EventEmitter();

  constructor() { }

  // Method to emit coordinates
  emitCoordinates(coordinates: [number, number]) {
    this.coordinatesEmitter.emit(coordinates);
  }
}
