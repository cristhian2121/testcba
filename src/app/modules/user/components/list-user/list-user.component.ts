import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { IUser } from '@interfaces/Iuser.interface';
// Mock
import { columnUserTable } from '../../mocks/users.mock';
// Services
import { SelectedUserService } from '../../services/selected-user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  // displayedColumns = ["id", "first_name", "last_name", "email", "avatar"]
  _users: IUser[] = [];
  @Input() set users(users: IUser[]) {
    this._users = users
  }

  displayedColumns = columnUserTable

  constructor(private selectedUserService: SelectedUserService) { }

  ngOnInit(): void {
  }

  selectedUser(row: IUser) {
    if (row) {
      this.selectedUserService.setUser(row)
    }
  }

}
