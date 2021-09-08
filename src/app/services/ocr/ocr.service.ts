import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OcrService {
  cbImage:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
