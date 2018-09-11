import React from 'react';
import './settings.component.css';
import { DisplaySettings } from './display-settings/display-settings.component';
import { AudioSettings } from './audio-settings/audio-settings.component';
import { OthersSettings } from './others-settings/others-settings.component';

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
		let ul = [];
		let li = [];

		for (var i=0; i<_settingsArray.length; i++) {
			let item = _settingsArray[i];

			li.push(
				<li className="list-item" onClick={this.onSelect.bind(this, item)}>
					<img src={ item.icon } className="icon" />
					<span>{ item.name }</span>
					<div className="sub-settings">
						<div className={(this.selectedItem.name === item.name && item.id === i+1) ? 'show-module' : 'hide-module'}>
							{item.component}
						</div>
					</div>
				</li>
			);
		}

		ul.push(<ul>{li}</ul>);
		return ul;
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

	onSelect (item, event) {
		// console.log ('%%%%%%%%', event.target.closest('app-audio-settings') ) 
		// if ((event.target.closest('app-audio-settings') !== null) ||
		// 		(event.target.closest('app-display-settings') !== null) ||
		// 		(event.target.closest('app-others-settings') !== null)) {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// 	return;
		// } 
		
		if (!this.selectedItem || this.selectedItem !== item) {
			this.selectedItem = item;
		} else {
			this.selectedItem = {};
		}
		// console.warn ('@@!! selectedItem', item); 
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