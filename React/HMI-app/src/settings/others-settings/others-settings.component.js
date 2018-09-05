import React from 'react';
import './others-settings.component.css';

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

	changeValue (key, value, event) {
		switch (key) {
			case 'units':
				// send for feneral
				this.state.OTHERS[key].selected = value;
				console.warn(key.toUpperCase() + ' units changed: ' + this.state.OTHERS[key].selected); 
				break;
			default:
				console.warn('Unknown key ', key);
				return;				
		}


		this.setState({OTHERS: this.state.OTHERS}); // to update value!!
	}

	render() {
		return (
			<div className="others-settings">
				<div>
					<h3>Units:</h3>
					<div onClick={this.changeValue.bind(this, 'units', 0)}>
						<input type="radio" name="units" />
						<label>Kilometres</label>
					</div>
					<div onClick={this.changeValue.bind(this, 'units', 1)}>
						<input type="radio" name="units" />
						<label>Miles</label>
					</div>
				</div>
				<div>
					<h3>Memory usage (%):</h3>
					<button disabled={ true }>-</button>
					<progress value={ this.state.OTHERS['memory'] } max="100"></progress>
					<button disabled={true}>+</button>
				</div>	
			</div>
		);
	}
}