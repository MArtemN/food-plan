import { Component } from 'react';
import DateHeader from '../dateHeader/DateHeader';
import FoodItem from '../foodItem/FoodItem';
import { v4 as uuidv4 } from 'uuid';

import './foodContainer.scss';

class FoodContainer extends Component {
	constructor (props) {
		super(props)

		this.state = {
			data: this.props.data,
		}
	}

	onDelete = (numberOfMeal) => {
		if (window.confirm('Вы уверены, что хотите удалить прием пищи?')) {
			let newData = Object.assign(this.state.data, []),
				idArray = [];

			idArray = newData[1][numberOfMeal].map(item => {
				return item.id;
			});

			delete newData[1][numberOfMeal];

			this.setState(({data}) => ({
				data: newData
			}));
		}
	}

	render() {
		const foodDate = this.state.data[0],
			foodDataArr = Object.entries(this.state.data[1]);

		const foodItem = foodDataArr.map((item, index) => {
			return (
				<FoodItem
					key={uuidv4()}
					numberOfMeal={index + 1}
					mealItems={item[1]}
					onDelete={() => this.onDelete(item[0])}/>
			)
		});

		return (
			<div className="food">
				<DateHeader date={foodDate}/>
				<div className="food__menu">
					<div className="food__block-list">
						{foodItem}
					</div>
				</div>
			</div>
		)
	}
}

export default FoodContainer;