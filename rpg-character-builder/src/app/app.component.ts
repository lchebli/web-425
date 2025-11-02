import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="app-wrapper">
      <header class="app-header">
        <h1>Character Builder</h1>
      </header>

    <div class="sign-in-container">
      <a routerLink="/signin" class="sign-in-link">Sign In</a>
    </div>

    <main class="app-main">
      <nav class="app-nav">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/signin">Sign-In</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
        </ul>
      </nav>

      <section class="app-content">
        <router-outlet></router-outlet>
      </section>
    </main>

      <footer class="app-footer">
        <nav class="footer-nav">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li>|</li>
            <li><a routerLink="/players">Players</a></li>
            <li>|</li>
            <li><a routerLink="/signin">Sign-In</a></li>
            <li>|</li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li>|</li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li>|</li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
          </ul>
        </nav>
        <p>&copy; 2025 Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-wrapper {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .app-header {
      background-color: #a11616ff;
      color: #fff;
      padding: 20px;
      text-align: center;
      font-size: 2rem;
    }

    .app-nav, .footer-nav {
      background-color: #0891acff;
      padding: 10px;
      font-size: 16px;
      text-color: #fff;
    }

    .app-nav ul, .footer-nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 0;
      margin: 0;
    }

    .app-nav a, .footer-nav a {
      text-decoration: none;
      color: #0e022fff;
    }

    .app-main {
      flex: 1;
      padding: 20px;
      font-size: 1rem; /* Smallest font */
    }

    .app-footer {
      background-color: #d028b4ff;
      color: #fff;
      text-align: center;
      padding: 15px;
    }
  `]
})
export class AppComponent {}

