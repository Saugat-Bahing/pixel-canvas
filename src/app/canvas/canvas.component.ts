import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  noOfDivs: number[] = [];
  color = "red";
  clickIndex: number = -1;
  clickedCol: any[] = [];
  clickState: number = -1;
  left = "100px";
  top = "100px";
  visibility = "none";
  cursorBorder = "2px solid grey";

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {

    this.sharedService.currentColor.subscribe(color => this.color = color)
    for (let i = 0; i < 100 * 50; i++) {

      this.noOfDivs.push(i);
    }
  }

  giveColor(item: number) {

    this.clickState *= -1;
    this.clickIndex = item;
    this.clickedCol.push({ "index": this.clickIndex, "color": this.color })
    if (this.clickState == 1) {

      this.cursorBorder = "2px solid white";
    }

    else this.cursorBorder = "2px solid grey";
  }

  clicked(item: number) {
    let state = false;

    for (let i = 0; i < this.clickedCol.length; i++) {

      if (this.clickedCol[i].index == item) {
        state = true;
      }
    }

    return state;
  }

  mouseOver(item: number) {
    if (this.clickState == 1) {

      this.clickIndex = item;
      this.clickedCol.push({ "index": this.clickIndex, "color": this.color });
    }
  }

  setColor(item: number) {

    let color = "";
    for (let i = 0; i < this.clickedCol.length; i++) {

      if (this.clickedCol[i].index == item) {

        color = this.clickedCol[i].color;
      }
    }

    return color
  }

  cursor(event: any) {

    console.log(event)
    this.left = event.clientX.toString() + "px";
    this.top = event.clientY.toString() + "px";
  }

  invisible() {

    this.visibility = "none";
  }

  visible() {

    this.visibility = "block";
  }

  clearCanvas() {

    this.clickedCol = [];
  }
}
