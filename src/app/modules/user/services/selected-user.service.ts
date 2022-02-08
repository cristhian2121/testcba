import { Injectable } from "@angular/core";
import { IUser } from "@interfaces/Iuser.interface";
import { Subject } from "rxjs";

@Injectable()
export class SelectedUserService {
    private selectedUser = new Subject<IUser>()
    selectedUser$ = this.selectedUser.asObservable()

    setUser = (user: IUser) => {
        this.selectedUser.next(user)
    }

    clearUser = () => {
        this.selectedUser.next(undefined)
    }
}