import React from 'react';
import './display-settings.component.css';

const DISP = {
    brighntness: 90,
    red        : 100,
    green      : 99,
    blue       : 89,
    contrast   : 70
};

export class DisplaySettings extends React.Component {
	constructor(props) {
		super(props);
		

	    this.state = {
	    	DISP: DISP
	    };
	}

	changeValue (key, value, event) {
		switch (key) {
			case 'brighntness':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed: ' + this.state.DISP[key]); 
				break;
			case 'red':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.DISP[key]); 
				break;
			case 'green':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.DISP[key]); 
				break;
			case 'blue':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.DISP[key]); 
				break;
			case 'contrast':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.DISP[key]); 
				break;
			default:
				console.warn('Unknown key ', key);
				return;				
		}

		this.state.DISP[key] += value;
		this.setState({DISP: this.state.DISP}); // to update value!!
	}

	render() {
		return (
			<div className="display-settings">
				<div>
					<h3>Brighntness:</h3>
					<button onClick={this.changeValue.bind(this, 'brighntness', -1)}>-</button>
					<progress value={ this.state.DISP['brighntness'] } max="100" onClick={this.changeValue.bind(this, 'brighntness', 0)}></progress>
					<button onClick={this.changeValue.bind(this, 'brighntness', 1)}>+</button>
				</div>
				<div>
					<h3>Colors:</h3>
					<h6>Red:</h6>
					<div>	
						<button onClick={this.changeValue.bind(this, 'red', -1)}>-</button>
						<progress value={ this.state.DISP['red'] } max="100"></progress>
						<button onClick={this.changeValue.bind(this, 'red', 1)}>+</button>
					</div>

					<h6>Green:</h6>
					<div>	
						<button onClick={this.changeValue.bind(this, 'green', -1)}>-</button>
						<progress value={ this.state.DISP['green'] } max="100"></progress>
						<button onClick={this.changeValue.bind(this, 'green', 1)}>+</button>
					</div>

					<h6>Blue:</h6>
					<div>	
						<button onClick={this.changeValue.bind(this, 'blue', -1)}>-</button>
						<progress value={ this.state.DISP['blue'] } max="100"></progress>
						<button onClick={this.changeValue.bind(this, 'blue', 1)}>+</button>
					</div>
				</div>
				<div>
					<h3>Contrast:</h3>
					<button onClick={this.changeValue.bind(this, 'contrast', -1)}>-</button>
					<progress value={ this.state.DISP['contrast'] } max="100"></progress>
					<button onClick={this.changeValue.bind(this, 'contrast', 1)}>+</button>
				</div>
			</div>
		);
	}
}