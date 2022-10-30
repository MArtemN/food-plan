import { Component } from 'react'
import InputMask from '../inputMask/InputMask'

import './addFood.scss'

class AddFood extends Component {
	constructor (props) {
		super(props)

		this.state = {
			data: {
				date: this.props.date,
				numberOfMeal: this.props.numberOfMeal,
				food: '',
				quantity: '',
				protein: '',
			}
		}
	}

	onChange = (e) => {
		const targetValue = e.target.value,
			targetName = e.target.name,
			modifiedData = Object.assign({}, this.state.data);

		if (targetName === 'numberOfMeal' || targetName === 'quantity' || targetName === 'protein') {
			modifiedData[targetName] = InputMask(targetValue);
		} else {
			modifiedData[targetName] = targetValue;
		}

		this.setState(({data: modifiedData}));
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.data.food === 'Вода') {
			this.state.data.protein = 0;
		}
		this.props.addNewFood(this.state.data);
		this.props.setModalActive();
	}

	render() {
		const {numberOfMeal, food, quantity, protein} = this.state.data;
		return (
			<form className="form" action="#" onSubmit={this.onSubmit}>
				<label>Номер приема пищи
					<input
						name="numberOfMeal"
						value={numberOfMeal}
						type="text"
						onChange={this.onChange}/>
				</label>
				<label>Блюдо
					<input
						name="food"
						value={food}
						type="text"
						onChange={this.onChange}/>
				</label>
				<label>Кол-во
					<input
						name="quantity"
						value={quantity}
						type="text"
						onChange={this.onChange}/>
				</label>
				<label>Белки
					<input
						name="protein"
						value={protein}
						type="text"
						onChange={this.onChange}/>
				</label>
				<button className="add-button">Добавить</button>
			</form>
		)
	}
}

export default AddFood;