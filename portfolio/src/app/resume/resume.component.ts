import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume-container">
      <h2>My Resume</h2>

      <section class="resume-section">
        <h3>Education</h3>
        <ul>
          <li>California State University, Bakersfield - B.A. in Liberal Studies</li>
          <li>Bellevue University - B.A. in Web Development</li>
        </ul>
      </section>

      <section class="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Angular, TypeScript</li>
          <li>Git, Responsive Design</li>
        </ul>
      </section>

      <section class="resume-section">
        <h3>Work Experience</h3>
        <ul>
          <li>Teacher's Assistant at Di-Georgio Elementary School, 2019-2021</li>
          <li>Target Warehouse Team Member, 2020-current</li>
        </ul>
      </section>

      <section class="resume-section">
        <h3>Official Resume</h3>
        <p><a href="/Current_Resume.pdf" target="_blank" class="resume-link">View Full Resume (PDF)</a></p>
      </section>
    </div>
  `,
  styles: [`
    .resume-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .resume-container h2 {
      color: #333;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }

    .resume-section {
      margin-bottom: 30px;
    }

    .resume-section h3 {
      color: #4CAF50;
      margin-bottom: 15px;
      font-size: 1.2em;
    }

    .resume-section ul {
      list-style-type: none;
      padding-left: 0;
    }

    .resume-section li {
      background-color: #f9f9f9;
      margin-bottom: 8px;
      padding: 12px;
      border-radius: 4px;
      border-left: 4px solid #4CAF50;
    }

    .resume-link {
      display: inline-block;
      background-color: #4CAF50;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .resume-link:hover {
      background-color: #45a049;
    }
  `]
})
export class ResumeComponent {

}
