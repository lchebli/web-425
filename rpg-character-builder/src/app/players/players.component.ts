import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: 'male' | 'female' | 'other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="players-container">
      <h1>Available Characters</h1>

      <div class="character-table">
        @for (row of characterRows; track $index) {
          <div class="character-row">
            @for (character of row; track character.name) {
              <div class="character-cell">
                <div class="character-card">
                  <h2>{{ character.name }}</h2>
                  <div class="character-info">
                    <p><strong>Class:</strong> <span class="class-{{ character.class.toLowerCase() }}">{{ character.class }}</span></p>
                    <p><strong>Gender:</strong> {{ character.gender }}</p>
                    <p><strong>Faction:</strong> {{ character.faction }}</p>
                    <p><strong>Starting Location:</strong> {{ character.startingLocation }}</p>
                    <p class="fun-fact"><strong>Fun Fact:</strong> {{ character.funFact }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .players-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      text-align: center;
      margin-bottom: 30px;
    }

    .character-table {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .character-row {
      display: flex;
      gap: 20px;
      justify-content: flex-start;
    }

    .character-cell {
      flex: 1;
      min-width: 0; /* Prevents flex items from overflowing */
      max-width: calc(33.333% - 14px); /* Accounts for gap */
    }

    .character-card {
      background: #ffffff;
      border-radius: 8px;
      padding: 20px;
      height: 100%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s ease;
    }

    .character-card:hover {
      transform: translateY(-5px);
    }

    .character-card h2 {
      color: #34495e;
      margin-bottom: 15px;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }

    .character-info p {
      margin: 8px 0;
      line-height: 1.4;
    }

    .fun-fact {
      margin-top: 15px;
      padding: 10px;
      background: #f7f9fc;
      border-radius: 4px;
      font-style: italic;
    }

    .class-warrior {
      color: #e74c3c;
    }

    .class-mage {
      color: #3498db;
    }

    .class-rogue {
      color: #2ecc71;
    }

    /* Responsive design for smaller screens */
    @media (max-width: 900px) {
      .character-row {
        flex-wrap: wrap;
      }
      .character-cell {
        max-width: calc(50% - 10px);
      }
    }

    @media (max-width: 600px) {
      .character-cell {
        max-width: 100%;
      }
    }
  `]
})
export class PlayersComponent {
  characterRows: Character[][] = [];
  characters: Character[] = [
    {
      name: "Thorn Cosmo",
      gender: "female",
      class: "Warrior",
      faction: "Guardians Rivers",
      startingLocation: "Crescent Valley",
      funFact: "Can bench press twice her body weight and is a sweetheart"
    },
    {
      name: "Beetlejuice",
      gender: "male",
      class: "Rogue",
      faction: "Sandworms",
      startingLocation: "Underworld",
      funFact: "Has never loved anyone more than Lydia Deetz"
    },
    {
      name: "Michel Myers",
      gender: "male",
      class: "Mage",
      faction: "horror Spirits",
      startingLocation: "Haddonfield, Illinois",
      funFact: "Hates his sisters and spends holidays alone"
    },
    {
      name: "Freddie Kruger",
      gender: "male",
      class: "Rogue",
      faction: "nightmare Realm",
      startingLocation: "Elm Street",
      funFact: "Scary Terry is his cousin twice removed"
    },
    {
      name: "Wednesday Lovely",
      gender: "female",
      class: "Warrior",
      faction: "Storm Legion",
      startingLocation: "Thunder Mountain",
      funFact: "Writes poetry about her favorite battles"
    },
    {
      name: "Astrid Frosthands",
      gender: "female",
      class: "Mage",
      faction: "Icy Covenant",
      startingLocation: "Arctic Circle",
      funFact: "Makes the best ice cream"
    },
    {
      name: "Regina Blade",
      gender: "other",
      class: "Rogue",
      faction: "Shadow Symphony",
      startingLocation: "Swordhaven",
      funFact: "Can cut a turkey dinner with a single swipe"
    },
    {
      name: "Betty Metty",
      gender: "female",
      class: "Warrior",
      faction: "Bear moms",
      startingLocation: "North Pole",
      funFact: "fights alongside polar bears to protect abandoned cubs"
    },
    {
      name: "Iris Spellbound",
      gender: "female",
      class: "Mage",
      faction: "Coven of peace",
      startingLocation: "Canada",
      funFact: "Her spell-book is actually a collection of recipe cards for baking treats that create peace among warring factions"
    },
    {
      name: "Shady Nightwalker",
      gender: "other",
      class: "Rogue",
      faction: "Dusk Raiders",
      startingLocation: "Shadow World",
      funFact: "Is in fact a shadow that sometimes wanders off on its own especially at night"
    }
  ];

  constructor() {
    // Organize characters into rows of three
    for (let i = 0; i < this.characters.length; i += 3) {
      this.characterRows.push(this.characters.slice(i, i + 3));
    }
  }
}
