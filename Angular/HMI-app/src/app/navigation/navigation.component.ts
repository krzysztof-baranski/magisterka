import { Component, OnInit } from '@angular/core';
import ol from 'openlayers';
import { Router } from '@angular/router';

import { NavigationService } from '../services/navigation.service';
import { WebsocketWrapperService } from '../services/websocket-wrapper.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    map;
    showDestInput: boolean;
    showHomeDestInput: boolean;
    showDestSpinner: boolean;

    constructor(private naviService: NavigationService,
        private WS: WebsocketWrapperService,
        private router: Router) {

        this.subscriptions.push(this.onHomeAddressChange());
        this.subscriptions.push(this.onAddressChange());
    }

    subscriptions: Object[] = [];
    homeAddr: Object = this.naviService.homeAddress;
    address: Object = this.naviService.address;

    onHomeAddressChange = () => {
        return this.naviService.homeAddressChange.subscribe((value) => {
            this.homeAddr = value;
            this.map.getView().setCenter(ol.proj.fromLonLat([21.0042, 52.1347])); // Wa-wa
        });
    }

    onAddressChange = () => {
        return this.naviService.addressChange.subscribe((value) => {
            this.address = value;
            this.map.getView().setCenter(ol.proj.fromLonLat([21.0042, 52.1347])); // Wa-wa
        });
    }

    setHomeAddress = () => {
        console.log('setHomeAddress');
        this.showHomeDestInput = true;
    }

    enterAddress = () => {
        console.log('enterAddress');
        this.showDestInput = true;
    }

    openRecentDestinations = () => {
        console.log('openRecentDestinations');
        this.WS.send(JSON.stringify({ cmd: 'reqGetRecentDestinations' }));
        this.router.navigate(['/navigation/recent-destinations']);
    }

    onAddressSubmit = (address) => {
        console.log('on onAddressSubmit');
        if (this.showDestInput) {
            this.WS.send(JSON.stringify({ cmd: 'reqSetAddress', address: address }));
        } else {
            this.WS.send(JSON.stringify({ cmd: 'reqSetHomeAddress', address: address }));
        }
    }

    onAddressCancel = () => {
        console.log('onAddressCancel');
        this.showDestInput = false;
        this.showHomeDestInput = false;
    }

    public onAddressAction(ev: any): void {
        const action = ev.type;
        const event: Event = ev.event;
        console.log('onAddressAction', ev);
        // event.preventDefault();
        switch (action) {
            case 'cancel':
                this.onAddressCancel();
                break;
            case 'submit':
                const address = ev.address;
                this.onAddressSubmit(address);
                break;
        }
    }

    selectOption = (action) => {
        switch (action) {
            case 'home-address':
                this.setHomeAddress();
                break;
            case 'enter-address':
                this.enterAddress();
                break;
            case 'recent-dest':
                this.openRecentDestinations();
                break;
            default:
                console.log('[Navi select option]: No action');
        }
    }

    ngOnInit() {
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([19.457216, 51.759445]), // Łódź
                zoom: 7
            })
        });
    }

}
