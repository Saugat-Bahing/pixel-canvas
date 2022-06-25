import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.css']
})
export class ChooseColorComponent implements OnInit {

  eraserState: number = -1;
  inputColor = "#0000ff";
  backColor: string = "rgb(68, 13, 139)";
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {

  }

  giveColor() {

    this.sharedService.changeColor(this.inputColor);
  }

  eraser() {

    this.eraserState *= -1;
    if (this.eraserState == 1) {

      this.backColor = "black";
      this.sharedService.changeColor("black")
    }
    else {
      
      this.sharedService.changeColor(this.inputColor);
      this.backColor = "rgb(68, 13, 139)";
    }
  }
}
