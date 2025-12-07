import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  id: number;
  name: string;
  gender?: string;
  class?: string;
}

@Component({
  standalone: true,
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [CommonModule]
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
  @Output() remove = new EventEmitter<number>();

  onRemove(id: number) {
    this.remove.emit(id);
  }
}
