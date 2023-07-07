import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{counter}}</h3>
      <button (click)="reset(10)">reset</button>
      <button (click)="addCounter(1)" >+1</button>
      <button (click)="decrementCounter(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  reset(value: number) {
    this.counter = value;
  };

  addCounter(value: number) {
    this.counter += value;
  };

  decrementCounter(value: number) {
    this.counter -= value;
  };

}
