import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle errors when data is not found', () => {
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });

    expect(component.errorMessage).toBe('Error fetching character factions: Not Found');
    expect(component.factions).toEqual([]);
  });

  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      { id: 1, name: 'Alliance', description: 'Heroes of the light' },
      { id: 2, name: 'Horde', description: 'Warriors of the dark' }
    ];

    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush(mockFactions);

    expect(component.factions).toEqual(mockFactions);
    expect(component.errorMessage).toBe('');
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockFactions = [
      { id: 1, name: 'Alliance', description: 'Heroes of the light' }
    ];

    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush(mockFactions);
    fixture.detectChanges();

    const factionDiv = fixture.nativeElement.querySelector('#characterFactions');
    expect(factionDiv).toBeTruthy();
    expect(factionDiv.textContent).toContain('Alliance');
  });
});
