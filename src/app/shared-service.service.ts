import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  color = "blue"

  colorName = new BehaviorSubject(this.color)

  currentColor = this.colorName.asObservable();

  changeColor(color:any){
     
    this.colorName.next(color);
  }
  constructor() { }
}
