import { Component } from 'react';
import FoodMenuList from '../foodMenuList/FoodMenuList';
import WaterBlock from '../waterBlock/WaterBlock';
import Calculator from '../calculator/Calculator';
import BtnBlock from '../btnBlock/BtnBlock';
import FoodMenuListEditMode from '../foodMenuListEditMode/FoodMenuListEditMode';
import FoodService from '../../services/FoodService';
import { v4 as uuidv4 } from 'uuid';

import './foodItem.scss';

class FoodItem extends Component {
	constructor (props) {
		super(props)

		this.state = {
			numberOfMeal: this.props.numberOfMeal,
			mealItems: this.props.mealItems,
			editMode: false,
		}
	}

	changeEditMode = () => {
		this.setState(({editMode: !this.state.editMode}));
	}

	saveChanges = () => {
		// const foodService = new FoodService(),
		// 	sendData = JSON.stringify(this.state.mealItems);
		//
		// foodService
		// 	.postData('saveChanges.php', sendData)
		// 	.then((res) => {
		// 		console.log(res)
		// 	});
	}

	render() {
		const {numberOfMeal, mealItems, editMode} = this.state;
		let editModeClassName = editMode ? ' editMode' : '';

		const mealItem = mealItems.map((item) => {
			if (editMode) {
				return (
					<FoodMenuListEditMode
						key={uuidv4()}
						data={item}/>
				)
			} else {
				return (
					<FoodMenuList
						key={uuidv4()}
						data={item}
						editMode={editMode}/>
				)
			}
		});

		return (
			<div className={"menu__number-list" + editModeClassName}>
				<h2>{numberOfMeal}</h2>
				<div className="menu__list">
					<div className="menu__content">
						{editMode ? <div className="edit-message">Внимание! Вы в режиме редактирования</div> : null}
						<div className="title">
							<h4>Блюдо</h4>
							<h4>Кол-во</h4>
							<h4>Белки</h4>
						</div>
						{mealItem}
					</div>
					<div className="menu__footer">
						<div className="result">
							<WaterBlock isEdit={this.state.editMode}/>
							<Calculator/>
						</div>
						<BtnBlock
							changeEditMode={this.changeEditMode}
							saveChanges={this.saveChanges}
							onDelete={this.props.onDelete}/>
					</div>
				</div>
			</div>
		)
	}
}

export default FoodItem;