import { Component } from 'react';

class WaterBlock extends Component {
	constructor (props) {
		super(props)
		this.state = {
			water: '',
		}
	}

	onChange = (e) => {
		this.setState(({water: e.target.value}));
	}

	render() {
		return (
			<div className="water">Вода: {this.props.isEdit ?
				<input
					type="number"
					min="0"
					value={this.state.water}
					onChange={this.onChange}/> :
				<span>{this.state.water === '' ? 0 : this.state.water}</span>}
			</div>
		)
	}
}

export default WaterBlock;