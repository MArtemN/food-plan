import { Component } from 'react';
import InputMask from '../inputMask/InputMask';

import './foodMenuListEditMode.scss';

class FoodMenuListEditMode extends Component {
	constructor (props) {
		super(props)

		this.state = {
			data: this.props.data,
		}
	}

	onChangeMenu = (e) => {
		let modifiedData = Object.assign(this.state.data, []);

		if (e.target.name === 'quantity' || e.target.name === 'protein') {
			e.target.value = InputMask(e.target.value);
		}

		modifiedData[e.target.name] = e.target.value;
		this.setState({
			data: modifiedData
		});
	}

	render() {
		const {id, food, quantity, protein} = this.state.data;
		let isShow = false;

		if (food || quantity || protein) {
			isShow = true;
		}

		return (
			<>
				{isShow ? <div className="menu__list_container edit">
					<ul data-id={id} className="items-list">
						<li className="item">
							<input
								name="food"
								onChange={this.onChangeMenu}
								value={food}
								type="text"/>
						</li>
						<li className="item">
							<input
								name="quantity"
								onChange={this.onChangeMenu}
								value={quantity}
								type="text"/>
						</li>
						<li className="item">
							<input
								name="protein"
								onChange={this.onChangeMenu}
								value={protein}
								type="text"/>
						</li>
					</ul>
				</div>: null}
			</>
		)
	}
}

export default FoodMenuListEditMode;