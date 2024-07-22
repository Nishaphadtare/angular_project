import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class twoWayComponent {

  name: string = "User name : "
  twoWayId : number = 75488654;
  allowNewTwoWay = true;

  twoWayCreationStatus : string = "User name is : ";

  twoWayName :string= ' ';
  constructor() {
    setTimeout(() => {
      this.allowNewTwoWay = true
    }, 5000);
   }

 
  onCreateTwoWay() {
    this.twoWayCreationStatus = " "

  }


}
