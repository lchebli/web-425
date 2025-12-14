import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Faction {
  id: number;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-faction.component.html',
  styleUrl: './character-faction.component.css'
})
export class CharacterFactionComponent implements OnInit {
  factions: Faction[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Faction[]>('http://localhost:3000/api/character-factions').subscribe({
      next: (data) => {
        this.factions = data;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = `Error fetching character factions: ${error.statusText}`;
        this.factions = [];
      }
    });
  }
}
