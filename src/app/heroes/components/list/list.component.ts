import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spider Man', 'Iron Man', 'Hulk', 'Thor', 'Capitan America'];
  public deletedHero?: string;
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
