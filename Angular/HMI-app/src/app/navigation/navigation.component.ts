import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	map;

	constructor() { }

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
