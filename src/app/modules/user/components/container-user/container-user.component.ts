import { Component, OnInit } from '@angular/core';
// Interfaces
import { IUser } from '@interfaces/Iuser.interface';
import { ErrorMessage } from '@services/mocks';
// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegresService } from '@services/regres.service';

@Component({
  selector: 'app-container-user',
  templateUrl: './container-user.component.html',
  styleUrls: ['./container-user.component.scss']
})
export class ContainerUserComponent implements OnInit {

  users: IUser[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private regresSrv: RegresService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  /**
   * Get first user page from regresApi
   */
  getUsers() {
    this.regresSrv.getUsers().subscribe(_ => {
      this.users = _.data
    },
    error => this._snackBar.open('Ups ocurrió un error, intentalo en unos momentos', 'cerrar', ErrorMessage))
  }

}
