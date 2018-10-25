import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private _homeAddress: Object;
    private _address: Object;
    private _recentDestinations: Object[];

    homeAddressChange: Subject<Object> = new Subject<Object>();
    addressChange: Subject<Object> = new Subject<Object>();
    recentDestinationsChange: Subject<Object[]> = new Subject<Object[]>();

    public get homeAddress(): Object {
        return this._homeAddress;
    }

    public set homeAddress(v: Object) {
        this._homeAddress = v;
        this.homeAddressChange.next(this._homeAddress);
    }

    public get address(): Object {
        return this._address;
    }

    public set address(v: Object) {
        this._address = v;
        this.addressChange.next(this._address);
    }

    public get recentDestinations(): Object[] {
        return this._recentDestinations;
    }

    public set recentDestinations(v: Object[]) {
        this._recentDestinations = v;
        this.recentDestinationsChange.next(this._recentDestinations);
    }

}
