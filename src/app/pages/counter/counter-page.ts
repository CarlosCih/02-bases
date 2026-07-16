import { Component } from '@angular/core';


@Component({
  template:`
  <h1>Counter Page</h1>
  <h2>Hola mundo!</h2>

  <p>
    <strong>Counter: </strong> {{ counter }}
  </p>

  <button (click)="increment(1)">Increment</button>
  <button (click)="decrement(1)">Decrement</button>
  `,
})
export class CounterPage{

  counter = 10;

  increment(value: number){
    this.counter += value;
  }

  decrement(value: number){
    this.counter -= value;
  }

}
