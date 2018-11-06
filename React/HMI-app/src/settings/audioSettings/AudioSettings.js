import React from 'react';

import SettingsItem from '../SettingsItem'

const VOLUMES = {
    general : 70,
    navi    : 80,
    speech  : 65,
    balance : -4,
    fader   : 10
}	

export class AudioSettings extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			VOLUMES: VOLUMES
		}


	}

	changeValue (key, value, event) {
		// if (event.target.closest('app-audio-settings') !== null) {
			event.preventDefault();
			event.stopPropagation();
		// } 
		 
		switch (key) {
			case 'general':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed: ' + this.state.VOLUMES[key]); 
				break;
			case 'navi':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.VOLUMES[key]); 
				break;
			case 'speech':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.VOLUMES[key]); 
				break;
			case 'balance':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.VOLUMES[key]); 
				break;
			case 'fader':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.VOLUMES[key]); 
				break;
			default:
				console.warn('Unknown key ', key);
				return;				
		}

		// this.state.VOLUMES[key] += value;
		let newVolumes = this.state.VOLUMES;
		newVolumes[key] += value;
		this.setState({VOLUMES: newVolumes}); // to update value!!
	} 

	render() {
		return (
			<div className="settings-item">
				<SettingsItem
					label='General volume:'
					value={this.state.VOLUMES['general']}
					onClickedDown={(e) => this.changeValue('general', -1, e)}
					onClickedUp={(e) => this.changeValue('general', 1, e)}
					onClickedProgress={(e) => this.changeValue('general', 0, e)} />
				<SettingsItem
					label='Navi volume:'
					value={this.state.VOLUMES['navi']}
					onClickedDown={(e) => this.changeValue('navi', -1, e)}
					onClickedUp={(e) => this.changeValue('navi', 1, e)}
					onClickedProgress={(e) => this.changeValue('navi', 0, e)} />
				<SettingsItem
					label='Speech volume:'
					value={this.state.VOLUMES['speech']}
					onClickedDown={(e) => this.changeValue('speech', -1, e)}
					onClickedUp={(e) => this.changeValue('speech', 1, e)}
					onClickedProgress={(e) => this.changeValue('speech', 0, e)} />

				<SettingsItem
					label='Balance:'
					value={this.state.VOLUMES['balance']}
					onClickedDown={(e) => this.changeValue('balance', -1, e)}
					onClickedUp={(e) => this.changeValue('balance', 1, e)}
					onClickedProgress={(e) => this.changeValue('balance', 0, e)} />
				<SettingsItem
					label='Fader volume:'
					value={this.state.VOLUMES['fader']}
					onClickedDown={(e) => this.changeValue('fader', -1, e)}
					onClickedUp={(e) => this.changeValue('fader', 1, e)}
					onClickedProgress={(e) => this.changeValue('fader', 0, e)} />
			</div>
		);
	}
}