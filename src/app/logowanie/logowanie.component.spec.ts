import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogowanieComponent } from './logowanie.component';

describe('LogowanieComponent', () => {
  let component: LogowanieComponent;
  let fixture: ComponentFixture<LogowanieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogowanieComponent]
    });
    fixture = TestBed.createComponent(LogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable the submit button when the form is valid', () => {
    const component = fixture.componentInstance;
    component.formData.username = 'validUsername';
    component.formData.password = 'validPassword';
  
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton.getAttribute('disabled')).toBeNull();
  });
  
});
