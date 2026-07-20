import { Component, computed } from '@angular/core';
import { signal } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface Character {
  id?: number;
  name: string;
  power: number;
}


@Component({
  imports: [NgFor, NgClass],
  selector: 'app-dragonball',
  templateUrl: './dragonball.html',

})
export class Dragonball {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 7000 },
    { id: 4, name: 'Gohan', power: 7500 },
    { id: 5, name: 'Frieza', power: 10000 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': this.characters().some(character => character.power > 9000),
      'text-warning': this.characters().some(character => character.power < 9000 && character.power > 7000),
      'text-success': this.characters().every(character => character.power <= 7000),
    }
  });
}
