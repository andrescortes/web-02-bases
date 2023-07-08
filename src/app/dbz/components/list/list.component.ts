import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public characterIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id:'',
      name: 'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(id?: string): void {
    if(!id)return;
    this.characterIndex.emit(id);
  }
}
