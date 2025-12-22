import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <h2>About Me</h2>
    <p>
      Hello! I'm Leslie, a passionate web developer with a love for creating dynamic and user-friendly websites. Welcome to my portfolio where I showcase my skills, projects, and experiences. I hope you find something that piques your interest!
    </p>

    <h2>Bucket List</h2>
    <p>
      I would love to move to Palm Springs one day and enjoy the beautiful desert scenery and vibrant community. I want to continue mastering my skills learns in web development and contribute to exciting projects. I would also love to build my own website for a blog where I can share my thoughts and experiences with the world.
    </p>
  `,
  styles: [`
    h2 {
      color: #333;
      font-size: 2em;
      margin-bottom: 10px;
    }
    p {
      line-height: 1.6;
      color: #666;
      margin-bottom: 20px;
    }
  `]
})
export class HomeComponent {

}
