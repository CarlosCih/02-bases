import { Component, computed, input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  imports: [NgFor, NgClass, CharacterList],
})
export class CharacterList {
  // Entradas requeridas para la lista de personajes y el nombre de la lista
  characters = input.required<Character[]>();
  listName = input.required<string>();
  // Clases CSS dinámicas para el poder de los personajes
  powerClasses = computed(() => {
    return {
      'text-danger': this.characters().some((character) => character.power > 9000),
      'text-warning': this.characters().some(
        (character) => character.power < 9000 && character.power > 7000,
      ),
      'text-success': this.characters().every((character) => character.power <= 7000),
    };
  });

}
