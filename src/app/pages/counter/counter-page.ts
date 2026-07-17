import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CounterButton } from './counter-button';

@Component({
  imports: [CounterButton],
  templateUrl: './counter-page.html',
  styles: [`
    .counter {
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: black;
      background-color: #eee;
      padding: 10px;
      cursor: pointer;
    }
    .counter:hover {
      background-color: #ddd;
    }
    .counter:active {
      background-color: #ccc;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPage{

  counter = 10;
  // Using signal to create a reactive counter value
  counterSignal = signal(10);

  // constructor(){
  //   setInterval(() => {
  //     // Este ejemplo no funciona correctamente, ya que no se está actualizando la señal de manera reactiva. Para que funcione correctamente, deberías usar `this.counterSignal.update()` para actualizar el valor de la señal en lugar de modificar directamente `this.counter`.
  //     // this.counter += 1;

  //     this.counterSignal.update((current) => current + 1);
  //     console.log('Tick')
  //   }, 2000);
  // }

  increment(value: number){
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decrement(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

}
