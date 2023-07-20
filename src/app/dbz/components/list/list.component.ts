import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() characterList: Character[] = [{
    id: '',
    name: "Trunks",
    power: 400030
  }]

  @Output() onDelete = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    console.log(id)
    this.onDelete.emit(id)
    console.log("Se emitio el index: " + id + " desde list.component.ts (Child)")
  }

}
