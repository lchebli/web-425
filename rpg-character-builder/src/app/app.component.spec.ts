import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render header with Character Builder', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Character Builder');
  });

  it('should render navigation links', () => {
    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('.app-nav a'));
    const routerLinks: (string | null)[] = links.map((link: DebugElement) => link.attributes['routerLink'] || null);

    // Filter out null values and check for expected routes
    const validRouterLinks = routerLinks.filter((link): link is string => link !== null);
    expect(validRouterLinks).toContain('/');
    expect(validRouterLinks).toContain('/players');
    expect(validRouterLinks).toContain('/signin');
    expect(validRouterLinks).toContain('/create-character');
    expect(validRouterLinks).toContain('/create-guild');
    expect(validRouterLinks).toContain('/character-faction');
  });
});
