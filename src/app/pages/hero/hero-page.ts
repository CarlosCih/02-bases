import { UpperCasePipe } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';


@Component({
  imports: [ UpperCasePipe ],
  templateUrl: './hero.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPage {
  // Señales con valores iniciales
  name = signal<string>('Iron Man');
  age = signal<number>(45);

  heroDescription = computed(() =>{
    const description = `${this.name()} tiene ${this.age()} años`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());



  // Metodo para obtener la descripción del heroe
  // getHeroDescription(){
  //   return `${this.name()} tiene ${this.age()} años`;
  // }

  // Metodo para cambiar de heroe
  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  // Metodo para resetear al heroe original
  resetForm(){
    this.name.set('Iron Man');
    this.age.set(45);
  }

  // Metodo para cambiar la edad
  changeAge(){
    this.age.set(60);
  }
}
