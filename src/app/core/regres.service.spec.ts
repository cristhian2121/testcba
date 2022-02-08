import { TestBed } from '@angular/core/testing'
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
// Environment
import { environment } from '@environments/environment'
// Service
import { RegresService } from './regres.service'

describe('RegresService', () => {
    let httpClient: HttpClient
    let httpTestingController: HttpTestingController
    let regresService: RegresService

    // execute before to testing
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        httpClient = TestBed.get(HttpClient)
        httpTestingController = TestBed.get(HttpTestingController)
        regresService = TestBed.get(RegresService)
    })


    // first test case
    it('validate service', () => {
        expect(regresService).toBeTruthy()
    })

    describe('Test for getUsers', () => {
    
        it('Should get data from regresApi', () => {
            const expectData = {
                page: 2,
                per_page: 6,
                total: 12,
                total_pages: 2,
                data: [
                    {
                        id: 7,
                        email: "michael.lawson@reqres.in",
                        first_name: "Michael",
                        last_name: "Lawson",
                        avatar: "https://reqres.in/img/faces/7-image.jpg"
                    }
                ]
            }
            let error;
            let data;
    
            regresService.getUsers().subscribe(
                res => data = res,
                err => error = err
            )
            const request = httpTestingController.expectOne(`${environment.reqresApi}/users`)
            request.flush(expectData)
    
            expect(request.request.method).toEqual('GET')
            expect(data).toBeTruthy()
            expect(error).toBeUndefined()
        })
    
    })
    
    describe('Test for login', () => {
    
        it('Shoud login in system and return token', () => {
    
            const expectData = {
                token: "QpwL5tke4Pnpja7X4"
            }
            const mock = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
    
            let error;
            let data;
    
            regresService.login(mock).subscribe(
                res => data = res,
                err => error = err
            )
    
            const request = httpTestingController.expectOne(`${environment.reqresApi}/login`)
            request.flush(expectData)
    
            expect(request.request.method).toEqual('POST')
            expect(data).toBeTruthy()
            expect(error).toBeUndefined()
        })
    })
})
