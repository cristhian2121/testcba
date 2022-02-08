import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Interfaces
import { ILoginUser } from '@interfaces/Iuser.interface';
// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegresService } from '@services/regres.service';
// Mocks
import {
  ErrorMessage,
  SuccessMessage
} from '@services/mocks'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup
  loader = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private regresService: RegresService,
    private _snackBar: MatSnackBar
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  /**
   * Validate credentials cons API
   */
  login() {
    // No is necesary because I manage disable in button but is for security
    if (!this.formLogin.valid) this.formLogin.markAllAsTouched()
    this.loader = true
    const login: ILoginUser = { ...this.formLogin.value }
    this.regresService.login(login).subscribe(res => {
      this._snackBar.open('Token generado y guardado', 'cerrar', SuccessMessage);
      this.router.navigate(["/usuarios"])
      this.loader = false
    },
      error => {
        this.loader = false
        this._snackBar.open('Credenciales no validas', 'cerrar', ErrorMessage);
      })

  }


}
