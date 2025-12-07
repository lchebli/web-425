import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { By } from '@angular/platform-browser';



describe('GuildListComponent (TDD)', () => {
  let fixture: ComponentFixture<GuildListComponent>;
  let component: GuildListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
  });

  it('should display guilds passed by input', () => {
    component.guilds = [
      { id: 1, name: 'Iron Strong', type: 'Combat' },
      { id: 2, name: 'Sable Star', type: 'Trade' }
    ];

    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('.guild-row'));
    expect(rows.length).toBe(2);
    expect(rows[0].nativeElement.textContent).toContain('Iron Strong');
    expect(rows[1].nativeElement.textContent).toContain('Sable Star');
  });

  it('should show empty message when guild list is empty', () => {
    component.guilds = [];
    fixture.detectChanges();
    const msg = fixture.debugElement.query(By.css('.empty-message'));
    expect(msg).toBeTruthy();
    expect(msg.nativeElement.textContent).toContain('No guilds yet');
  });

  it('should remove event when delete is clicked', () => {
    component.guilds = [ { id: 42, name: 'Mournwatch', type: 'Neutral' } ];
    spyOn(component.remove, 'emit');

    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.btn-remove'));
    btn.nativeElement.click();

    expect(component.remove.emit).toHaveBeenCalledWith(42);
  });
});
