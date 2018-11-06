import React from 'react';

const OTHERS = {
	units: {
		0: 'km',
		1: 'mil',
		selected: 0
	},
	memory: 38
};

export class OthersSettings extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			OTHERS: OTHERS
		};
	}

	changeValue(key, value, event) {
		event.preventDefault();
		event.stopPropagation();

		let others = this.state.OTHERS;
		switch (key) {
			case 'units':
				// send for feneral
				others[key].selected = value;
				console.warn(key.toUpperCase() + ' units changed: ');
				break;
			default:
				console.warn('Unknown key ', key);
				return;
		}


		this.setState({ OTHERS: others }); // to update value!!
	}

	render() {
		return (
			<div className="settings-item">
				<div className="units">
					<h3>Units:</h3>
					<div onClick={this.changeValue.bind(this, 'units', 0)}>
						<input
							type="radio"
							name="units"
							checked={this.state.OTHERS.units.selected === 0}
							onChange={() => { }} />
						<label>Kilometres</label>
					</div>
					<div onClick={this.changeValue.bind(this, 'units', 1)}>
						<input
							type="radio"
							name="units"
							checked={this.state.OTHERS.units.selected === 1}
							onChange={() => { }} />
						<label>Miles</label>
					</div>
					<hr />
				</div>
				<div>
					<h3>Memory usage (%):</h3>
					<div className="settings-controls">
						<button disabled={true}>-</button>
						<progress value={this.state.OTHERS['memory']} max="100"></progress>
						<button disabled={true}>+</button>
					</div>
				</div>
			</div>
		);
	}
}