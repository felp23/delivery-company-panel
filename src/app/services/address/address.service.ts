import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    addressId: any;
    address: any = {};
    addresses: any = [];
    newAddress: any = {};
    selectedAddress: any = {};
    editedAddress: any = {};

    constructor(
		private http: HttpClient,
		public configService: ConfigService
		) { }

    addAddress(): Observable<any> {
        let URL = this.configService.baseURL + 'address/add-address';
        return this.http.post<any>(URL, 
        {
            addressName: this.newAddress.addressName,
            addressStreet: this.newAddress.addressStreet,
            addressNumber: this.newAddress.addressNumber,
            addressNeighborhood: this.newAddress.addressNeighborhood,
            addressCity: this.newAddress.addressCity,
            addressComplement: this.newAddress.addressComplement,
            addressLat: this.newAddress.addressLat,
            addresslng: this.newAddress.addresslng
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('users', [])));
    }

    editAddress(editedAddress): Observable<any> {
        let URL = this.configService.baseURL + 'address/edit-address';
        return this.http.post<any>(URL, 
        {
            addressId: editedAddress.addressId,
            addressName: editedAddress.addressName,
            addressStreet: editedAddress.addressStreet,
            addressNumber: editedAddress.addressNumber,
            addressNeighborhood: editedAddress.addressNeighborhood,
            addressCity: editedAddress.addressCity,
            addressComplement: editedAddress.addressComplement,
            addressZipCode: editedAddress.addressZipCode,
            addressLat: editedAddress.addressLat,
            addressLng: editedAddress.addressLng
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

    getAddressById(): Observable<any> {
        let URL = this.configService.baseURL + 'address/address-by-id';
        return this.http.post<any>(URL, 
        {
            addressId: this.addressId
        })
        .pipe(
            tap(data => this.log(data)),
            catchError(this.handleError('users', [])));
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
