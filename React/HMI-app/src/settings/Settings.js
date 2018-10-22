import React from 'react';
import DisplaySettings from './displaySettings/DisplaySettings';
import { AudioSettings } from './audioSettings/AudioSettings';
import { OthersSettings } from './othersSettings/OthersSettings';

import './Settings.css';

const _settingsArray = [
	{
		id: 1,
		name: 'Display',
		component: <DisplaySettings />,
		icon: require('../assets/settings/display-settings.png')
	},
	{
		id: 2,
		name: 'Audio',
		component: <AudioSettings />,
		icon: require('../assets/settings/audio-settings.png')
	},
	{
		id: 3,
		name: 'Others',
		component: <OthersSettings />,
		icon: require('../assets/settings/others-settings.png')
	}
];

// function Display (props) {
// 	return <DisplaySettings />
// }

// function Audio (props) {
// 	return <AudioSettings />
// }

// function Others (props) {
// 	return <OthersSettings />
// }

export class Settings extends React.Component {
	constructor (props) {
		super(props);
		this.selectedItem = {};
		this.item = {};
		this.createList();
		this.state = {
			selectedItem: this.selectedItem
		};
	}

	createList () {
		let li = [];

		for (var i=0; i<_settingsArray.length; i++) {
			let item = _settingsArray[i];

			li.push(
				<li key={item.id} className="list-item" onClick={() => this.onSelect(item)}>
					<img src={ item.icon } className="icon" alt='' />
					<span>{ item.name }</span>
					<div className="sub-settings">
						<div className={(this.selectedItem.name === item.name && item.id === i+1) ? 'show-module' : 'hide-module'}>
							{item.component}
						</div>
					</div>
				</li>
			);
		}

		return <ul>{li}</ul>;
	}

	openDisplaySettings() {
		this.props.history.push('/settings/display-settings');
	}

	openAudioSettings() {
		this.props.history.push('/settings/audio-settings');
	}

	openOthersSettings() {
		this.props.history.push('/settings/others-settings');
	}

	onSelect (item/* , event */) {
		if (!this.selectedItem || this.selectedItem !== item) {
			this.selectedItem = item;
		} else {
			this.selectedItem = {};
		}
		this.createList();
		this.setState({selectedItem: this.selectedItem}); // to update value!!
	} 

	render() {
		return (
			<div className="settings">
				{ this.createList() }
			</div>
		);
	}
}