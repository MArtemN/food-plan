import { Component } from 'react';
import FoodMenuList from '../foodMenuList/FoodMenuList';
import WaterBlock from '../waterBlock/WaterBlock';
import Calculator from '../calculator/Calculator';
import BtnBlock from '../btnBlock/BtnBlock';
import FoodMenuListEditMode from '../foodMenuListEditMode/FoodMenuListEditMode';
// import FoodService from '../../services/FoodService';
import AddFoodItem from '../addFoodItem/AddFoodItem';
import { v4 as uuidv4 } from 'uuid';

import './foodItem.scss';

class FoodItem extends Component {
	constructor (props) {
		super(props)

		this.state = {
			numberOfMeal: this.props.numberOfMeal,
			mealItems: this.props.mealItems,
			editMode: false,
			addFoodItemModalActive: false,
			date: this.props.date,
		}
	}

	changeEditMode = () => {
		this.setState(({editMode: !this.state.editMode}));
	}

	changeAddFoodModalActive = (active) => {
		this.setState(({addFoodItemModalActive: active}))
	}

	render() {
		const {date, numberOfMeal, mealItems, editMode, addFoodItemModalActive} = this.state;
		let editModeClassName = editMode ? ' editMode' : '',
			water = {
				date: '',
				numberOfMeals: '',
			};


		const mealItem = mealItems.map((item) => {
			const {food} = item;
			if (food !== 'Вода') {
				water.date = item.date;
				water.numberOfMeals = item.numberOfMeals;
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
			} else {
				water = item;
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
							<WaterBlock
								data={water}
								editMode={editMode}/>
							<Calculator data={mealItems}/>
						</div>
						<BtnBlock
							changeEditMode={this.changeEditMode}
							onDelete={this.props.onDelete}
							changeAddFoodModalActive={this.changeAddFoodModalActive}/>
					</div>
				</div>
				<AddFoodItem
					active={addFoodItemModalActive}
					changeAddFoodModalActive={this.changeAddFoodModalActive}
					numberOfMeals={numberOfMeal}
					date={date}
					addNewFoodItem={this.props.addNewFoodItem}/>
			</div>
		)
	}
}

export default FoodItem;