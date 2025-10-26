import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-wrapper">
      <header class="app-header">
        <h1>Character Builder</h1>
      </header>

      <nav class="app-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Main</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Favorites</a></li>
        </ul>
      </nav>

      <main class="app-main">
        <router-outlet></router-outlet>
      </main>

      <footer class="app-footer">
        <nav class="footer-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Main</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Favorites</a></li>
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

