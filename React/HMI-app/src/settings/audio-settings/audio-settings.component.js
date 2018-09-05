import React from 'react';
import './audio-settings.component.css';

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
		if (event.target.closest('app-audio-settings') !== null) {
			event.preventDefault();
			event.stopPropagation();
		} 
		 
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

		this.state.VOLUMES[key] += value;
		this.setState({VOLUMES: this.state.VOLUMES}); // to update value!!
	} 

	render() {
		return (
			<div className="audio-settings">
				<div>
					<h3>General volume:</h3>
					<button onClick={this.changeValue.bind(this, 'general', -1)}>-</button>
					<progress value={ this.state.VOLUMES['general'] } max="100" onClick={this.changeValue.bind(this, 'general', 0)}></progress>
					<button onClick={this.changeValue.bind(this, 'general', 1)}>+</button>
				</div>
				<div>
					<h3>Navi volume:</h3>
					<button onClick={this.changeValue.bind(this, 'navi', -1)}>-</button>
					<progress value={ this.state.VOLUMES['navi'] } max="100"></progress>
					<button onClick={this.changeValue.bind(this, 'navi', 1)}>+</button>
				</div>
				<div>
					<h3>Speech volume:</h3>
					<button onClick={this.changeValue.bind(this, 'speech', -1)}>-</button>
					<progress value={ this.state.VOLUMES['speech'] } max="100"></progress>
					<button onClick={this.changeValue.bind(this, 'speech', 1)}>+</button>
				</div>
				<div>
					<h3>Balance:</h3>
					<button onClick={this.changeValue.bind(this, 'balance', -1)}>Left</button>
					<progress value={ this.state.VOLUMES['balance'] } min="-50" max="50"></progress>
					<button onClick={this.changeValue.bind(this, 'balance', 1)}>Right</button>
				</div>
				<div>
					<h3>Fader:</h3>
					<button onClick={this.changeValue.bind(this, 'fader', -1)}>Front</button>
					<progress value={ this.state.VOLUMES['fader'] } min="-50" max="50"></progress>
					<button onClick={this.changeValue.bind(this, 'fader', 1)}>Rear</button>
				</div>
					
			</div>
		);
	}
}