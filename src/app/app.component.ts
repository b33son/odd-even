import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterChange(change: { counter: number }) {
    console.log("onCounterChange: " + change.counter);
    if (change.counter % 2 === 0) {
      console.log("even");
      this.evenNumbers.push(change.counter);
    }
    else {
      console.log("odd");
      this.oddNumbers.push(change.counter);
    }
  }
}
