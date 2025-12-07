import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guild } from '../models/guild.model';

@Component({
  standalone: true,
  selector: 'app-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css'],
  imports: [CommonModule]
})
export class GuildListComponent {
  @Input() guilds: Guild[] = [];
  @Output() remove = new EventEmitter<number>();

  onRemove(id: number) {
    this.remove.emit(id);
  }
}
