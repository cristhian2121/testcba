import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        MatSnackBar,
        HttpClient,
        HttpHandler
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should disabled button when no exist email and password', fakeAsync(() => {
    spyOn(component, 'login');

    const email = component.formLogin.get('email')?.valid
    const password = component.formLogin.get('password')?.valid
    let button = fixture.debugElement.nativeElement.querySelector('button');


    if (!email || !password) {
      expect(button.disabled).toBe(true)
    }
  }));

  it('should enable button when exists email and password', fakeAsync(() => {
    spyOn(component, 'login');

    const email: HTMLInputElement = fixture.debugElement.query(By.css('#email')).nativeElement;
    const password: HTMLInputElement = fixture.debugElement.query(By.css('#password')).nativeElement;
    email.value = "test@test.com"
    password.value = "sad"
    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('button');
    console.log('button: ', button);
    expect(button.disabled).toBe(false)

  }));

});
