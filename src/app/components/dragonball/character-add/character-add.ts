import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  characters = signal<Character[]>([]);
  name = signal('');
  power = signal<number>(0);


  newCharacter = output<Character>();


 // Método para agregar un nuevo personaje
  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0){
      return;
    }

    // Crear un nuevo personaje con los datos ingresados
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000 ),
      name: this.name(),
      power: this.power(),
    };

    console.log(`Created new character: ${newCharacter.name} with power ${newCharacter.power}`);

    // Agregar el nuevo personaje a la lista de personajes
    // this.characters.update(characters => [...characters, newCharacter]);
    this.newCharacter.emit(newCharacter);
    // Limpiar los campos de entrada después de agregar el personaje
    this.name.set('');
    this.power.set(0);
  }

}
