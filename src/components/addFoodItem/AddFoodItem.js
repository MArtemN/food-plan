import { Component } from 'react';

import './addFoodItem.scss';
import InputMask from '../inputMask/InputMask'

class AddFoodItem extends Component {
	constructor (props) {
		super(props)

		this.state = {
			active: this.props.active,
			data: {
				date: this.props.date,
				numberOfMeals: this.props.numberOfMeals,
				food: '',
				quantity: '',
				protein: '',
			},
		}
	}

	changeActiveModal = (e) => {
		if (e.target.classList.contains('active')) {
			this.props.changeAddFoodModalActive(false);

			this.setState(() => ({
				data: {
					date: this.props.date,
					numberOfMeals: this.props.numberOfMeals,
					food: '',
					quantity: '',
					protein: '',
				}
			}));
		}

		if (e.target.classList.contains('add-button')) {
			this.props.changeAddFoodModalActive(false);
		}
	}

	onChange = (e) => {
		let newData = Object.assign(this.state.data, []),
			targetValue = e.target.value;

		if (e.target.name === 'numberOfMeals' || e.target.name === 'quantity' || e.target.name === 'protein') {
			targetValue = InputMask(targetValue);
		}

		if (e.target.name === 'numberOfMeals' && targetValue < this.props.numberOfMeals) {
			targetValue = '';
		}

		newData[e.target.name] = targetValue;

		this.setState(() => ({
			data: newData
		}))
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addNewFoodItem(this.state.data);
	}

	render() {
		const {active} = this.props;
		const {numberOfMeals, food, quantity, protein} = this.state.data;

		return (
			<div className={active ? "modal modal__overlay active" : "modal modal__overlay"} onClick={this.changeActiveModal}>
				<div className={active ? "modal__content modal__content_active" : "modal__content"}>
					<h2 className="form-title">Добавить новый прием пищи</h2>
					<form className="addForm" action="#" onSubmit={this.onSubmit}>
						<label htmlFor="numberOfMeal">Номер приема пищи</label>
							<input
								name="numberOfMeals"
								value={numberOfMeals}
								id="numberOfMeal"
								type="text"
								onChange={this.onChange}/>
						<label htmlFor="meal">Блюдо</label>
							<input
								name="food"
								value={food}
								id="meal"
								type="text"
								onChange={this.onChange}/>
						<label htmlFor="quantity">Кол-во</label>
							<input
								name="quantity"
								value={quantity}
								id="quantity"
								type="text"
								onChange={this.onChange}/>
						<label htmlFor="protein">Белки</label>
							<input
								name="protein"
								value={protein}
								id="protein"
								type="text"
								onChange={this.onChange}/>
						<button className="add-button" onClick={this.changeActiveModal}>Добавить</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddFoodItem;