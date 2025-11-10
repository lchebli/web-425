import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" title="Go to Home">Home</a></li>
          <li><a routerLink="/players" routerLinkActive="active" title="View All Characters">Players</a></li>
          <li><a routerLink="/signin" routerLinkActive="active" title="Sign In to Your Account">Sign-In</a></li>
          <li><a routerLink="/create-character" routerLinkActive="active" title="Create a New Character">Create Character</a></li>
          <li><a routerLink="/create-guild" routerLinkActive="active" title="Create a New Guild">Create Guild</a></li>
          <li><a routerLink="/character-faction" routerLinkActive="active" title="Manage Character Factions">Character Faction</a></li>
        </ul>
      </nav>

      <section class="app-content">
        <router-outlet></router-outlet>
      </section>
    </main>

      <footer class="app-footer">
        <nav class="footer-nav">
          <ul>
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" title="Go to Home">Home</a></li>
            <li class="separator">|</li>
            <li><a routerLink="/players" routerLinkActive="active" title="View All Characters">Players</a></li>
            <li class="separator">|</li>
            <li><a routerLink="/signin" routerLinkActive="active" title="Sign In to Your Account">Sign-In</a></li>
            <li class="separator">|</li>
            <li><a routerLink="/create-character" routerLinkActive="active" title="Create a New Character">Create Character</a></li>
            <li class="separator">|</li>
            <li><a routerLink="/create-guild" routerLinkActive="active" title="Create a New Guild">Create Guild</a></li>
            <li class="separator">|</li>
            <li><a routerLink="/character-faction" routerLinkActive="active" title="Manage Character Factions">Character Faction</a></li>
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
      padding: 15px;
      font-size: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .app-nav ul, .footer-nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
    }

    .app-nav a, .footer-nav a {
      text-decoration: none;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .app-nav a:hover, .footer-nav a:hover {
      background-color: rgba(255,255,255,0.1);
      transform: translateY(-2px);
    }

    .app-nav a.active, .footer-nav a.active {
      background-color: #ffffff;
      color: #0891acff;
      font-weight: bold;
    }

    .separator {
      color: rgba(255,255,255,0.5);
    }

    .app-main {
      flex: 1;
      padding: 20px;
      font-size: 1rem;
      background-color: #f5f5f5;
    }

    .app-footer {
      background-color: #d028b4ff;
      color: #fff;
      text-align: center;
      padding: 20px;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      .app-nav ul, .footer-nav ul {
        gap: 10px;
      }

      .app-nav a, .footer-nav a {
        padding: 6px 12px;
        font-size: 14px;
      }

      .separator {
        display: none;
      }

      .footer-nav ul {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class AppComponent {}

