import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';


//delete this later but between line 15 and line 16 add an image and delete the note that's not green refer to page 7 of textbook


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],

  template: `
  <div class="wrapper">
  <header class="banner">
    <h1>Leslie's Portfolio</h1>
  </header>

  <main class= "main-content">
  <nav class="nav-bar">
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/resume">Resume</a></li>
      <li><a routerLink="/portfolio">Portfolio</a></li>
    </ul>
  </nav>



  <section class="content">
  <router-outlet/>
  </section>
  </main>

  <footer class="footer">
  <nav class="footer-nav">
  <a routerLink="/">Home</a> |
  <a routerLink="/resume">Resume</a> |
  <a routerLink="/portfolio">Portfolio</a> |
  </nav>
  <p>&copy; 2025 Leslie's Portfolio</p>
  </footer>
</div>
 `
 ,
 styles: [`
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.banner {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.main-content {
  flex: 1;
  display: flex;
  background-color: #cbefd7ff;
}

.nav-bar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 1rem;
}

.nav-bar ul {
  margin: 0;
  list-style-type: none;
  padding: 1rem;
}

.nav-bar li {
  margin-bottom: 0.5rem;
}

.nav-bar a {
  text-decoration: none;
  padding: 0.5rem;
  color: #333;
}

.nav-bar a:hover {
  text-decoration: none;
  background-color: #85e4a6ff;
}

.content {
  flex: 1;
  padding: 1rem;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

.footer-nav a {
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer-nav a:hover {
  text-decoration: none;
  background-color: #08742eff;
}

  `]

})
export class AppComponent {
  title = 'portfolio';
}

