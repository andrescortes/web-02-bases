import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 50;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} years old.`;
  }


  changeHero(): void {
    this.name = 'Captain-america';
  }

  changeAge(): void {
    this.age = 100;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 50;
  }

}
