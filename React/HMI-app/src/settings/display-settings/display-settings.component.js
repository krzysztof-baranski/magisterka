import React from 'react';
import './display-settings.component.css';

import DisplayItem from '../SettingsItem';

const DISP = {
	brighntness: 90,
	red: 100,
	green: 99,
	blue: 89,
	contrast: 70
};

export class DisplaySettings extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			DISP: DISP
		};
	}

	changeValue(key, value, event) {
		event.preventDefault();
		event.stopPropagation();
		console.log('SETTINGS changeValue', key, value);
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

		// this.state.DISP[key] += value;
		let newDisp = this.state.DISP;
		newDisp[key] += value;
		this.setState({ DISP: newDisp }); // to update value!!
	}

	render() {
		return (
			<div className="display-settings">
				{/* <div>
					<h3>Brighntness:</h3>
					<button onClick={this.changeValue.bind(this, 'brighntness', -1)}>-</button>
					<progress value={ this.state.DISP['brighntness'] } max="100" onClick={this.changeValue.bind(this, 'brighntness', 0)}></progress>
					<button onClick={this.changeValue.bind(this, 'brighntness', 1)}>+</button>
				</div> */}
				<DisplayItem
					label='Brightness:'
					value={this.state.DISP['brighntness']}
					onClickedDown={(e) => this.changeValue('brighntness', -1, e)}
					onClickedUp={(e) => this.changeValue('brighntness', 1, e)}
					onClickedProgress={(e) => this.changeValue('brighntness', 0, e)} />
				<div>
					<h3>Colors:</h3>
					<h6>Red:</h6>
					<DisplayItem
						label=''
						value={this.state.DISP['red']}
						onClickedDown={(e) => this.changeValue('red', -1, e)}
						onClickedProgress={(e) => this.changeValue('red', 0, e)}
						onClickedUp={(e) => this.changeValue('red', 1, e)}
					/>
					<h6>Green:</h6>
					<DisplayItem
						label=''
						value={this.state.DISP['green']}
						onClickedDown={(e) => this.changeValue('green', -1, e)}
						onClickedProgress={(e) => this.changeValue('green', 0, e)}
						onClickedUp={(e) => this.changeValue('green', 1, e)}
					/>

					<h6>Blue:</h6>
					<DisplayItem
						label=''
						value={this.state.DISP['blue']}
						onClickedDown={(e) => this.changeValue('blue', -1, e)}
						onClickedProgress={(e) => this.changeValue('blue', 0, e)}
						onClickedUp={(e) => this.changeValue('blue', 1, e)}
					/>
				</div>
				<div>
					<DisplayItem
						label='Contrast:'
						value={this.state.DISP['contrast']}
						onClickedDown={(e) => this.changeValue('contrast', -1, e)}
						onClickedProgress={(e) => this.changeValue('contrast', 0, e)}
						onClickedUp={(e) => this.changeValue('contrast', 1, e)} />
				</div>
			</div>
		);
	}
}