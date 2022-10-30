import { Component } from 'react';

import './btnBlock.scss';

class BtnBlock extends Component  {
	constructor(props) {
		super(props)
		this.state = {
			editMode: false,
		}
	}

	onDelete = () => {
		const {deleteMealItem, menuListItems, date, numberOfMeal} = this.props;
		deleteMealItem(menuListItems, date, numberOfMeal);
	}

	onAddNewFood = () => {
		this.props.onChangeModalActive();
	}

	onEdit = () => {
		if (this.state.editMode) {
			this.props.saveChangesMenu(this.props.menuListItems);
		}
		this.setState({editMode: !this.state.editMode});
		this.props.onEditMode();
	}

	render() {
		const {editMode} = this.state;

		return (
			<div className="btn-container">
				<button onClick={this.onAddNewFood} className="add">Добавить</button>
				<button onClick={this.onEdit} className="edit">{editMode ? 'Сохранить' : 'Редактировать'}</button>
				<button onClick={this.onDelete} className="remove">Удалить</button>
			</div>
		)
	}
}

export default BtnBlock;