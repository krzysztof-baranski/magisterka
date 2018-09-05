import React from 'react';

export class TunerList extends React.Component {
	constructor (props) {
		super(props);
		this.stationList = [];
		this.item = {};
	}

	playStation () {
		console.warn('@@@ playStation');
	}

	render() {
		return (
			<div class="list-container">
				<ul>
					<li class="list-item" onClick={this.playStation.bind(this.item)}>
						<span class="fav-ico-container">
							<span>LIST TUNER</span>
							<img class="fav-ico" src="assets/media/favorite_icon.png"/>
						</span>
						<span>{ this.item.name }</span>
					</li>
				</ul>
			</div>

		);
	}
}