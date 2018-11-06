import React from 'react';
import { connect } from 'react-redux';

import DisplayItem from '../SettingsItem';

const DISP = {
	brighntness: 90,
	red: 100,
	green: 99,
	blue: 89,
	contrast: 70
};

class DisplaySettings extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			DISP: DISP
		};
	}

	changeValue(key, value, event) {
		event.nativeEvent.preventDefault();
		event.stopPropagation();
		console.log('SETTINGS changeValue', key, value);
		let cmd;
		let color = {
			red: this.state.DISP['red'],
			green: this.state.DISP['green'],
			blue: this.state.DISP['blue']
		}
		switch (key) {
			case 'brighntness':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed: ' + this.state.DISP[key]);
				cmd = 'reqSetBrightness';
				break;
				case 'red':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.DISP[key]);
				cmd = 'reqSetColor';
				break;
				case 'green':
				// send for feneral
				console.warn(key.toUpperCase() + ' volume changed ' + this.state.DISP[key]);
				cmd = 'reqSetColor';
				break;
				case 'blue':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.DISP[key]);
				cmd = 'reqSetColor';
				break;
				case 'contrast':
				// send for feneral
				console.warn(key.toUpperCase() + ' value changed ' + this.state.DISP[key]);
				cmd = 'reqSetContrast';
				break;
			default:
				console.warn('Unknown key ', key);
				return;
			}
			
			// this.state.DISP[key] += value;
			let newDisp = this.state.DISP;
			newDisp[key] += value;
			this.setState({ DISP: newDisp }); // to update value!!

			if (key === 'red' || key === 'blue' || key === 'green') {
				color[key] = this.state.DISP[key];
				this.props.WS.send(JSON.stringify({ cmd: cmd, value: color }));
			} else {
				this.props.WS.send(JSON.stringify({ cmd: cmd, value: this.state.DISP[key] }));
			}
	}

	render() {
		return (
			<div className="settings-item">
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

const mapStateToProps = state => {
    return {
		WS: state.webSocket
    };
}

// const mapDispatchToState = dispatch => {
// 	return {
// 		setCurrentStation	: station => dispatch(Actions.setCurrentStation(station))
// 	}
// }

export default connect(mapStateToProps/* , mapDispatchToState */)(DisplaySettings);