import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegresService } from '@services/regres.service';
// Mosck
import { ErrorMessage } from '@services/mocks';
// Interfaces
import { INewUserResponse } from '@interfaces/Iuser.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  formCreateUser: FormGroup
  newUser?: INewUserResponse
  loader = false

  constructor(
    private formBuilder: FormBuilder,
    private regresService: RegresService,
    private _snackBar: MatSnackBar
  ) {

    // Build form
    this.formCreateUser = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      job: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  createUser() {
    if (this.formCreateUser?.valid) {
      this.loader = true
      this.regresService.createUser(this.formCreateUser.value)
        .subscribe(res => {
          this.formCreateUser.reset()
          this.loader = false
          this.newUser = res;
        },
          error => {
            this.loader = false
            this._snackBar.open('Ups ocurrió un error, intentalo en unos momentos', 'cerrar', ErrorMessage);
          })
    }

  }

}
