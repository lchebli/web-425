import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;

  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  template: `
    <div class="create-character-container">
      <h1>Create Character</h1>
      <p class="subtitle">Ready to get started? Create your character here.</p>

      <!-- Form Section -->
      <div class="form-section">
        <h2>Character Creation Form</h2>
        <form (ngSubmit)="onCreateCharacter()" #characterForm="ngForm" class="character-form">

          <div class="form-group">
            <label for="characterName">Character Name:</label>
            <input
              type="text"
              id="characterName"
              name="characterName"
              [(ngModel)]="formData.name"
              placeholder="Enter character name"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="characterGender">Gender:</label>
            <select
              id="characterGender"
              name="characterGender"
              [(ngModel)]="formData.gender"
              required
              class="form-select"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="characterClass">Class:</label>
            <select
              id="characterClass"
              name="characterClass"
              [(ngModel)]="formData.class"
              required
              class="form-select"
            >
              <option value="">Select Class</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>
          </div>

          <button type="submit" class="btn-submit" [disabled]="!characterForm.valid">
            Create Character
          </button>
        </form>
      </div>

      <!-- Characters Display Section -->
      <div class="display-section" *ngIf="characters.length > 0">
        <h2>Created Characters ({{ characters.length }})</h2>

        <div class="characters-cards">
          <div *ngFor="let character of characters" class="character-card">
            <div class="card-header">
              <h3>{{ character.name }}</h3>
              <button (click)="onDeleteCharacter(character.id)" class="btn-delete" title="Delete character">×</button>
            </div>
            <div class="card-body">
              <p><strong>Gender:</strong> {{ character.gender }}</p>
              <p><strong>Class:</strong> <span class="class-badge" [ngClass]="'class-' + character.class.toLowerCase()">{{ character.class }}</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- No Characters Message -->
      <div class="no-characters" *ngIf="characters.length === 0">
        <p>No characters created yet. Fill out the form above to create your first character!</p>
      </div>
    </div>
  `,
  styles: [`
    .create-character-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }

    h1 {
      color: #2c3e50;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }

    .subtitle {
      text-align: center;
      color: #7f8c8d;
      margin-bottom: 30px;
      font-size: 1rem;
    }

    /* Form Section Styles */
    .form-section {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 40px;
    }

    .form-section h2 {
      color: #34495e;
      margin-bottom: 25px;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }

    .character-form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      align-items: end;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 8px;
      color: #2c3e50;
      font-weight: 600;
    }

    .form-input,
    .form-select {
      padding: 10px 12px;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      font-size: 1rem;
      font-family: Arial, sans-serif;
      transition: border-color 0.3s ease;
    }

    .form-input:focus,
    .form-select:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
    }

    .form-input::placeholder {
      color: #bdc3c7;
    }

    .btn-submit {
      padding: 10px 30px;
      background-color: #27ae60;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-submit:hover:not(:disabled) {
      background-color: #229954;
    }

    .btn-submit:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    /* Display Section Styles */
    .display-section {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .display-section h2 {
      color: #34495e;
      margin-bottom: 25px;
      border-bottom: 2px solid #e74c3c;
      padding-bottom: 10px;
    }

    .characters-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .character-card {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .character-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0,0,0,0.15);
    }

    .card-header {
      background-color: #34495e;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.3rem;
    }

    .btn-delete {
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-delete:hover {
      background-color: #c0392b;
    }

    .card-body {
      padding: 15px;
      background-color: white;
    }

    .card-body p {
      margin: 8px 0;
      color: #2c3e50;
    }

    .class-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 600;
      color: white;
    }

    .class-warrior {
      background-color: #e74c3c;
    }

    .class-mage {
      background-color: #3498db;
    }

    .class-rogue {
      background-color: #2ecc71;
    }

    .no-characters {
      background-color: #ffffff;
      padding: 40px 30px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .create-character-container {
        padding: 20px 15px;
      }

      h1 {
        font-size: 2rem;
      }

      .character-form {
        grid-template-columns: 1fr;
      }

      .characters-cards {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }

    @media (max-width: 480px) {
      .form-section,
      .display-section,
      .no-characters {
        padding: 20px 15px;
      }

      h1 {
        font-size: 1.5rem;
      }

      .characters-cards {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CreateCharacterComponent {
  characters: { id: number; name: string; gender: string; class: string }[] = [];
  private nextId = 1;

  formData = {
    name: '',
    gender: 'Other' as 'Male' | 'Female' | 'Other',
    class: 'Warrior' as 'Warrior' | 'Mage' | 'Rogue',
  };

  resetFormData() {
  this.formData = {
    name: '',
    gender: '' as 'Male' | 'Female' | 'Other',
    class: '' as 'Warrior' | 'Mage' | 'Rogue',
  };
}


onCreateCharacter(): number {
  const randomId = Math.floor(Math.random() * 1000) + 1;

  const newCharacter = {
    id: randomId,
    name: this.formData.name,
    gender: this.formData.gender,
    class: this.formData.class,
  };

  this.characters.push(newCharacter);
  return randomId;
}




  onDeleteCharacter(id: number) {
    this.characters = this.characters.filter(char => char.id !== id);
  }
}


