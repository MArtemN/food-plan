import { Component } from 'react';

import './btnBlock.scss';

class BtnBlock extends Component  {
	constructor(props) {
		super(props)

		this.state = {
			editMode: false,
		}
	}

	onEditMode = () => {
		this.setState(({editMode: !this.state.editMode}));
		this.props.changeEditMode();
	}

	onDelete = () => {
		this.props.onDelete();
	}

	onAddFoodItem = () => {
		this.props.changeAddFoodModalActive(true);
	}

	render() {
		return (
			<div className="btn-cont">
				<button onClick={this.onAddFoodItem} className="add">Добавить</button>
				<button
					onClick={this.onEditMode}
					className="edit">{this.state.editMode ? 'Сохранить' : 'Редактировать'}</button>
				<button onClick={this.onDelete} className="remove">Удалить</button>
			</div>
		)
	}
}

export default BtnBlock;