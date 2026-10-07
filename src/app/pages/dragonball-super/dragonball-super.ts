import { Component, computed } from '@angular/core';
import { signal } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';


interface Character {
  id?: number;
  name: string;
  power: number;
}

@Component({
  imports: [NgFor, NgClass, CharacterList, CharacterAdd],
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
})
export class DragonballSuper {
  // Señales para el nombre y poder del nuevo personaje
  name = signal('');
  power = signal<number>(0);


  // Lista de personajes
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 100500 },
    { id: 2, name: 'Vegeta', power: 100000 },
  ]);


 
}
