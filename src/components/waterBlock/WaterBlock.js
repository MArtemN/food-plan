import { Component } from 'react';

import './waterBlock.scss';

class WaterBlock extends Component {

	constructor (props) {
		super(props)

		this.state = {
			water: this.props.data,
		}
	}

	onChange = (e) => {
		let newData = Object.assign(this.state.water, []);
		newData.quantity = e.target.value;

		this.setState(() => ({
			water: newData
		}));
	}

	render() {
		const {quantity} = this.state.water;

		return (
			<div className="water">Вода: {this.props.editMode ?
				<input
					type="number"
					min="0"
					value={quantity ? quantity : ''}
					onChange={this.onChange}/> :
				<span>{quantity ? quantity : '0'}</span>}
			</div>
		)
	}
}

export default WaterBlock;