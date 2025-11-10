import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="menu-nav">
      <a routerLink="/players" class="players-link">Players</a>
    </nav>

    <div class="menu-characters">
      <h3>Characters</h3>
      <ul class="character-list">
        <li *ngFor="let c of characters">{{ c.name }}</li>
      </ul>
    </div>
  `,
  styles: [``]
})
export class MenuComponent {
  // Intentionally start with an empty array — tests will drive expected behavior (TDD)
  characters: Array<{ name: string }> = [];
}
