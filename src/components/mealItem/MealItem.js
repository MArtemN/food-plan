import { Component } from 'react';
import FoodMenuList from '../foodMenuList/FoodMenuList';
import FoodMenuListEditable from '../foodMenuListEditable/FoodMenuListEditable';
import Modal from '../modal/Modal';
import WaterBlock from '../waterBlock/WaterBlock';
import Calculator from '../calculator/Calculator';
import BtnBlock from '../btnBlock/BtnBlock';
import AddFood from '../addFood/AddFood';
import InputMask from '../inputMask/InputMask';

import './mealItem.scss';

class MealItem extends Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfMeal: this.props.numberOfMeal,
			menuListItems: this.props.menuListItems,
			editMode: false,
			date: this.props.date,
			modalActive: false,
		}
	}

	onChangeModalActive = () => {
		this.setState(({modalActive: !this.state.modalActive}));
		document.body.classList.remove('hidden');
		document.body.style.marginRight = '';
	}

	onEditMode = () => {
		this.setState({editMode: !this.state.editMode});
	}

	onChangeMenuList = (e, id) => {
		let targetName = e.target.name,
			targetValue = e.target.value,
			targetId = id;

		if (targetName === 'quantity' || targetName === 'protein') {
			targetValue = InputMask(targetValue)
		}

		this.setState(({menuListItems}) => ({
			menuListItems: menuListItems.map(item => {
				if (item.id === targetId) {
					item[targetName] = targetValue
				}
				return item
			})
		}));
	}

	render() {
		const {numberOfMeal, menuListItems, modalActive, date, editMode} = this.state;
		const {addNewFood, deleteMealItem, saveChangesMenu} = this.props;
		const editModeClassName = editMode ? ' editMode' : '';
		const waterData = menuListItems.filter(item => item.food === 'Вода');

		return (
			<div className={"meal-item__container" + editModeClassName}>
				<h2>{numberOfMeal}</h2>
				<div className="menu-list menu-list__container">
					<div className="menu-list__content">
						{editMode ? <div className="menu-list__edit-message">Внимание! Вы в режиме редактирования</div> : null}
						<div className="menu-list__header">
							<h4>Блюдо</h4>
							<h4>Кол-во</h4>
							<h4>Белки</h4>
						</div>
						{editMode ?
							<FoodMenuListEditable
							data={menuListItems}
							onChangeMenuList={this.onChangeMenuList}/> :
							<FoodMenuList
								data={menuListItems}/>}
					</div>
					<div className="menu-list__footer">
						<div className="menu-list__footer_result">
							<WaterBlock
								data={waterData}
								editMode={editMode}
								onChangeMenuList={this.onChangeMenuList}/>
							<Calculator data={menuListItems}/>
						</div>
						<BtnBlock
							onChangeModalActive={this.onChangeModalActive}
							onEditMode={this.onEditMode}
							saveChangesMenu={saveChangesMenu}
							deleteMealItem={deleteMealItem}
							menuListItems={menuListItems}
							date={date}
							numberOfMeal={numberOfMeal}/>
					</div>
				</div>
				<Modal
					active={modalActive}
					title="Добавить жрачку"
					content={<AddFood
						numberOfMeal={numberOfMeal}
						addNewFood={addNewFood}
						setModalActive={this.onChangeModalActive}
						date={date}/>}
					setActive={this.onChangeModalActive}/>
			</div>
		)
	}
}

export default MealItem;