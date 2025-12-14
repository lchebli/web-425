import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    component = new CreateCharacterComponent();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
  const component = new CreateCharacterComponent ();
  const id = component.onCreateCharacter();
  expect(id).toBeGreaterThanOrEqual(1);
  expect(id).toBeLessThanOrEqual(1000);
  expect(Number.isInteger(id)).toBeTrue();
});

  it('should add a character with correct customization', () => {
  component.formData.name = 'Testcharacter';
  component.formData.gender = 'Male';
  component.formData.class = 'Warrior';

  const addedId = component.onCreateCharacter();
  const addedCharacter = component.characters.find(c => c.id === addedId);

  expect(addedCharacter?.name).toBe('Testcharacter');
  expect(addedCharacter?.gender).toBe('Male');
  expect(addedCharacter?.class).toBe('Warrior');
});



  it('should reset all form fields to their default values after resetForm is called', () => {
    component.formData.name = 'SomeName';
    component.formData.gender = 'Female';
    component.formData.class = 'Mage';

    component.resetFormData();
    expect(component.formData.name).toBe('');
    expect(component.formData.gender).toBe('');
    expect(component.formData.class).toBe('');
  });

  it('should use the app-character-list child component', () => {
    // Template should include the child component
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('app-character-list'));
    expect(el).toBeTruthy();
  });


});
function onCreateCharacter() {
  throw new Error('Function not implemented.');
}

