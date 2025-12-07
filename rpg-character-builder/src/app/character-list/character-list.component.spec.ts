import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent (TDD)', () => {
  let fixture: ComponentFixture<CharacterListComponent>;
  let component: CharacterListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should display characters passed via input', () => {
    component.characters = [
      { id: 1, name: 'Thorna Ironheart', gender: 'Female', class: 'Warrior' },
      { id: 2, name: 'Arcus Spellforge', gender: 'Male', class: 'Mage' }
    ];

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.character-item'));
    expect(items.length).toBe(2);
    expect(items[0].nativeElement.textContent).toContain('Thorna Ironheart');
    expect(items[1].nativeElement.textContent).toContain('Arcus Spellforge');
  });

  it('should show empty message when character list is empty', () => {
    component.characters = [];
    fixture.detectChanges();
    const msg = fixture.debugElement.query(By.css('.empty-message'));
    expect(msg).toBeTruthy();
    expect(msg.nativeElement.textContent).toContain('No characters available');
  });

  it('should emit remove event when delete button clicked', () => {
    component.characters = [ { id: 7, name: 'Shade Nightwalker', gender: 'Other', class: 'Rogue' } ];
    spyOn(component.remove, 'emit');

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.btn-delete'));
    btn.nativeElement.click();

    expect(component.remove.emit).toHaveBeenCalledWith(7);
  });
});
