import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
	selectedItem;

	constructor(private router: Router) { 
		this._settings = this.settings;
	}

	public get settings() : Object[] {
		return this._settingsArray;
	}

	ngOnInit() {
	}

	onSelect (event, item) {
		// console.log ('%%%%%%%%', event.target.closest('app-audio-settings') ) 
		if ((event.target.closest('app-audio-settings') !== null) ||
				(event.target.closest('app-display-settings') !== null) ||
				(event.target.closest('app-others-settings') !== null)) {
			event.preventDefault();
			event.stopPropagation();
			return;
		} 
		
		if (!this.selectedItem || this.selectedItem !== item) {
			this.selectedItem = item;
		} else {
			this.selectedItem = null;
		}
		// console.warn ('@@!! selectedItem', item); 
	} 

	_settingsArray = [
		{
			id: 1,
			name: 'Display',
			icon: '/assets/settings/display-settings.png'
		},
		{
			id: 2,
			name: 'Audio',
			icon: '/assets/settings/audio-settings.png'
		},
		{
			id: 3,
			name: 'Others',
			icon: '/assets/settings/others-settings.png'
		}
	];
}

