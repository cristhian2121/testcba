import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
// Environment
import { environment } from '@environments/environment'
// Services
import { SessionStorageService } from "./sesion-storage.service";
// Interfaces
import {
    ILoginUser,
    ResponseRegres,
    INewUser,
    INewUserResponse
} from "@interfaces/Iuser.interface";

@Injectable({
    providedIn: 'root'
})
export class RegresService {

    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService
    ) {
        // super(environment.reqresApi)
    }

    private getUrl = () => environment.reqresApi

    /**
     * list users from regres.in API
     * @returns lista users
     */
    getUsers() {
        return this.http.get<ResponseRegres>(`${this.getUrl()}/users`)
    }

    /**
     * Allow singin to regres.in API
     */
    login(credentials: ILoginUser) {
        return this.http.post<ILoginUser>(`${this.getUrl()}/login`, credentials)
            .pipe(
                tap(res => {
                    const { token } = res;
                    this.sessionStorageService.set('token', token as string)
                })
            )
    }

    /**
     * Create a new user in regres.in
     * @param newUser: INewUser
     * @returns 
     */
    createUser(newUser: INewUser) {
        return this.http.post(`${this.getUrl()}/users`, newUser) as Observable<INewUserResponse>
    }


}