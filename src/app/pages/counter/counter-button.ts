import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter-button',
  template: `
    <button class="counter-reset" (click)="onReset()" style="margin-right: 5px;">Reset</button>
  `,
  styles: [
    `
      .counter-reset {
        margin: 10px;
        border: 1px solid #070707;
        border-radius: 5px;
        color: black;
        background-color: #ccc;
        padding: 10px;
        cursor: pointer;
      }
      .counter-reset:hover {
        background-color: #bbb;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(218, 98, 196, 0.4);
      }
      .counter-reset:active {
        background-color: #aaa;
      }
    `,
  ],
})
export class CounterButton {
  @Output() reset = new EventEmitter<void>();

  onReset() {
    this.reset.emit();
  }
}
