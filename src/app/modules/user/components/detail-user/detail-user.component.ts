import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectedUserService } from '../../services/selected-user.service';
// Interfaces
import { IUser } from '@interfaces/Iuser.interface';
// Mocks
import { ErrorMessage } from '@services/mocks';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  _user?: IUser
  subscriptor?: Subscription

  constructor(
    private selectedUserService: SelectedUserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscriptor = this.selectedUserService.selectedUser$.subscribe(user => {
      this._user = user
    },
      error => this._snackBar.open('Credenciales no validas', 'cerrar', ErrorMessage))
  }

  ngOnDestroy(): void {
    //Unsubscribe to selectedUser$ observable.    
    if (this.subscriptor) {
      this.subscriptor.unsubscribe()
    }
  }

}
