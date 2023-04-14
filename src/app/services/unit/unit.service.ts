import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { CompanyService } from '../company/company.service';

@Injectable({
    providedIn: 'root'
})

export class UnitService {

    users: any = [];
    newUnit: any = {};
    selectedUnit: any = {};
    editedUnit: any = {};

    constructor(
		private http: HttpClient,
		public configService: ConfigService,
        public companyService: CompanyService
		) { }

    addUnit(): Observable<any> {
        let URL = this.configService.baseURL + 'unit/add-unit';
        return this.http.post<any>(URL, 
        {
            unitName: this.newUnit.unitName,
            unitPhone: this.newUnit.unitPhone,
            unitEmail: this.newUnit.unitEmail,
            unitAddressId: this.newUnit.unitAddressId,
            unitCompanyId: this.newUnit.unitCompanyId
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('users', [])));
    }

    editUser(editedUser): Observable<any> {
        let URL = this.configService.baseURL + 'unit/edit-unit';
        return this.http.post<any>(URL, 
        {
            userId: editedUser.userId,
            userFirstName: editedUser.userFirstName,
            userLastName: editedUser.userLastName,
            userEmail: editedUser.userEmail,
            userPhone: editedUser.userPhone,
            userBirthdate: editedUser.userBirthdate,
            userPasscode: editedUser.userPasscode,
            userLevel: editedUser.userLevel,
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('users', [])));
    }

    deleteUser(userId): Observable<any> {
        let URL = this.configService.baseURL + 'user/delete-user';
        return this.http.post<any>(URL, 
        {
            userId: userId
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('users', [])));
    }

    getUnitsByCompany(): Observable<any> {
        let URL = this.configService.baseURL + 'unit/units-by-company';
        return this.http.post<any>(URL, 
        {
            companyId: this.companyService.company.companyId
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('units', [])));
    }

    private log(message: string) {
        console.log(message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }
}
