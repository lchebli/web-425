import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <h2>My Projects</h2>
    <div class="projects">
      <div class="project">
        <h3>RPG Character Builder</h3>
        <p>A web application for creating and customizing RPG characters. Built with modern web technologies to provide an interactive character creation experience.</p>
        <a href="/rpg-character-builder/index.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>Cookbook API</h3>
        <p>A RESTful API for managing cookbook recipes and ingredients. Built with Express.js and Node.js, featuring user authentication and recipe management capabilities.</p>
        <a href="/cookbook/index.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>Fantasy Game Characters</h3>
        <p>A JavaScript module for managing fantasy game characters including warriors, rogues, and mages. Features character data management and retrieval using Node.js child processes.</p>
        <a href="/fantasy-game-characters/404.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>In-N-Out Books</h3>
        <p>A RESTful API for managing a book collection with titles and authors. Built with Express.js and Node.js, providing endpoints for retrieving books and individual book details.</p>
        <a href="/in-n-out-books/index.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>Wild Rescues</h3>
        <p>A responsive website for an animal rescue organization featuring multiple pages including home, about, contact, gallery, and partnership sections. Built with HTML, CSS, and modern web design principles.</p>
        <a href="/rescue/index.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>Form Validation Project</h3>
        <p>A JavaScript form validation application for account signup with password requirements including length, uppercase letters, numbers, and special characters. Built with HTML, CSS, and JavaScript.</p>
        <a href="/project07-01/project07-01.html" target="_blank" class="project-link">View Project</a>
      </div>
      <div class="project">
        <h3>Recipe Display Project</h3>
        <p>An interactive recipe display application with expanding and contracting content sections. Built with HTML, CSS, JavaScript, and jQuery for smooth animations and user interactions.</p>
        <a href="/project12-03/project12-03.html" target="_blank" class="project-link">View Project</a>
      </div>
      <!-- Add more projects here as needed -->
    </div>
  `,
  styles: [`
    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    .projects {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .project {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
    }
    .project h3 {
      color: #007bff;
      margin-top: 0;
    }
    .project p {
      line-height: 1.6;
      color: #666;
    }
    .project-link {
      display: inline-block;
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .project-link:hover {
      background-color: #0056b3;
    }
  `]
})
export class PortfolioComponent {

}
