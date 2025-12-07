import { Component, EventEmitter, Output } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';
import { Guild } from '../models/guild.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';


// use shared Guild model from src/app/models/guild.model.ts

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, ReactiveFormsModule, GuildListComponent],
  template: `
  <div class="form-container">
  <h2>Create a New Guild</h2>
  <form [formGroup]="guildForm" (ngSubmit)="onSubmit()">

    <!-- Guild Name -->
    <label for="guildName">Guild Name:</label>
    <input id="guildName" type="text" formControlName="guildName" />
    <div class="error" *ngIf="guildForm.get('guildName')?.touched && guildForm.get('guildName')?.invalid">
      Guild name is required.
    </div>

    <!-- Description -->
    <label for="description">Description:</label>
    <textarea id="description" formControlName="description"></textarea>
    <div class="error" *ngIf="guildForm.get('description')?.touched && guildForm.get('description')?.invalid">
      Description is required.
    </div>

    <!-- Type -->
    <label for="type">Type:</label>
    <select id="type" formControlName="type">
      <option value="">Select type</option>
      <option value="Competitive">Competitive</option>
      <option value="Casual">Casual</option>
      <option value="Social">Social</option>
      <option value="Educational">Educational</option>
    </select>
    <div class="error" *ngIf="guildForm.get('type')?.touched && guildForm.get('type')?.invalid">
      Type is required.
    </div>

    <!-- Notification Preference -->
    <label>Notification Preference:</label>
    <div>
      <label><input type="radio" value="Email" formControlName="notificationPreference" /> Email</label>
      <label><input type="radio" value="SMS" formControlName="notificationPreference" /> SMS</label>
      <label><input type="radio" value="InApp" formControlName="notificationPreference" /> In-App</label>
    </div>
    <div class="error" *ngIf="guildForm.get('notificationPreference')?.touched && guildForm.get('notificationPreference')?.invalid">
      Notification preference is required.
    </div>

    <!-- Accept Terms -->
    <label>
      <input type="checkbox" formControlName="acceptTerms" /> I accept the terms and conditions
    </label>
    <div class="error" *ngIf="guildForm.get('acceptTerms')?.touched && guildForm.get('acceptTerms')?.invalid">
      You must accept the terms.
    </div>

    <!-- Submit -->
    <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
  </form>
</div>

<!-- Guilds Display Section -->
<div class="guilds-section">
  <app-guild-list [guilds]="guilds" (remove)="onRemoveGuild($event)"></app-guild-list>
</div>

  `,
  styles: `.form-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #4914e9ff;
  border-radius: 8px;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  margin-top: 15px;
  padding: 10px 15px;
  background: #ff00eeff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #6240ecff;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 0.9em;
}

.guilds-section {
  margin: 30px auto;
  max-width: 700px;
}

.guilds-section table {
  width: 100%;
  border-collapse: collapse;
}

.guilds-section th, .guilds-section td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.guilds-section th {
  background: #007bff;
  color: white;
}
`
})
export class CreateGuildComponent {
  @Output() created = new EventEmitter<any>();
  guildForm: FormGroup;
  guilds: Guild[] = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.guildForm.invalid) {
      this.guildForm.markAllAsTouched();
      return;
    }

    const id = Math.floor(Math.random() * 1000) + 1;

    const newGuild: any = {
      id,
      name: this.guildForm.value.guildName,
      description: this.guildForm.value.description,
      type: this.guildForm.value.type,
      notificationPreference: this.guildForm.value.notificationPreference
    };

    this.guilds.push(newGuild);
    // Emit created guild for parent/consumers
    this.created.emit(newGuild);
    this.guildForm.reset();
  }

  onRemoveGuild(id: number) {
    this.guilds = this.guilds.filter(g => (g as any).id !== id);
  }
}

