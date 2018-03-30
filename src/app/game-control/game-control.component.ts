import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EvenComponent } from "../even/even.component";
import { OddComponent } from "../odd/odd.component";


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {

  componentList = [{ counter: 0 }];
  timer;
  counter: number = 0;

  @Output() counterChange = new EventEmitter<{ counter: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {

    this.timer = setInterval(() => {
      this.counter = this.counter + 1;
      this.counterChange.emit({ counter: this.counter });
      this.componentList.push({ counter: this.counter });
      //console.log(this.counter);

    }, 1000);
  }

  onStop() {

    clearInterval(this.timer);
  }
}
