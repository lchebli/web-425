import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form with default values', () => {
    expect(component.guildForm).toBeTruthy();
    expect(component.guildForm.controls['guildName'].value).toBe('');
    expect(component.guildForm.controls['description'].value).toBe('');
    expect(component.guildForm.controls['type'].value).toBe('');
  });

  it('should mark form invalid if required fields are empty', () => {
  component.guildForm.controls['guildName'].setValue('');
  component.guildForm.controls['type'].setValue('');
  expect(component.guildForm.valid).toBeFalse();
});

it('should mark form valid and allow submission with correct data', () => {
  component.guildForm.controls['guildName'].setValue('Angular Lovers');
  component.guildForm.controls['description'].setValue('Fun for Angular learners');
  component.guildForm.controls['type'].setValue('Social');
  component.guildForm.controls['notificationPreference'].setValue('Email');
  component.guildForm.controls['acceptTerms'].setValue(true);

  expect(component.guildForm.valid).toBeTrue();

  spyOn(component, 'onSubmit');
  component.onSubmit();
  expect(component.onSubmit).toHaveBeenCalled();
});
});
