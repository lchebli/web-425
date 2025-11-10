import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PlayersComponent } from '../players/players.component';
import { By } from '@angular/platform-browser';

describe('MenuComponent (TDD)', () => {
  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'players', component: PlayersComponent }
        ]),
        MenuComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should have a players link that navigates to the players component', fakeAsync(() => {
    // Find the anchor with routerLink to /players
    const linkDebug = fixture.debugElement.query(By.css('a.players-link'));
    expect(linkDebug).toBeTruthy();

    // Simulate a click and advance the router
    linkDebug.nativeElement.click();
    tick();
    fixture.detectChanges();

    expect(location.path()).toBe('/players');
  }));

  it('should be able to create the PlayersComponent', () => {
    const playersFixture = TestBed.createComponent(PlayersComponent);
    const playersComp = playersFixture.componentInstance;
    expect(playersComp).toBeTruthy();
  });

  it('should display a list of characters (10 items expected)', () => {
    // Arrange: provide 10 character objects to the component
    component.characters = [
      { name: 'Thorna Ironheart' },
      { name: 'Zephyr Shadowweave' },
      { name: 'Arcus Spellforge' },
      { name: 'Luna Moonshadow' },
      { name: 'Magnus Thunderfist' },
      { name: 'Astrid Frostweaver' },
      { name: 'Raven Swiftblade' },
      { name: 'Bjorn Steelclaw' },
      { name: 'Iris Spellwhisper' },
      { name: 'Shade Nightwalker' }
    ];

    // Act
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.character-list li'));
    expect(items.length).toBe(10);

    // Check first and last item content as a sanity check
    expect(items[0].nativeElement.textContent).toContain('Thorna Ironheart');
    expect(items[9].nativeElement.textContent).toContain('Shade Nightwalker');
  });
});
