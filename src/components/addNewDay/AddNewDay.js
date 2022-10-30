import { Component } from 'react';
import AddFood from '../addFood/AddFood';
import Modal from '../modal/Modal';

import './addNewDay.scss';

class AddNewDay extends Component {
	constructor (props) {
		super(props)
		this.state = {
			numberOfMeal: '1',
			modalActive: false,
		}
	}

	onChangeModalActive = () => {
		this.setState(({modalActive: !this.state.modalActive}));
		document.body.classList.remove('hidden');
		document.body.style.marginRight = '';
	}

	render() {
		const date = new Date(),
			day = date.getDate(),
			month = (date.getMonth() + 1),
			year = date.getFullYear(),
			currentDate = `${day}.${month}.${year}`,
			showForm = !this.props.dataDates.includes(currentDate);

		return (
			<>
				{showForm ?
					<div className="food food__container">
						<h2 className="food__date">{currentDate}</h2>
						<div className="food__menu-container">
							<div className="meal-item__container new-day">
								<h2>Начать новый день</h2>
									<Modal
										active={this.state.modalActive}
										title="Добавить жрачку"
										content={<AddFood
											numberOfMeal={this.state.numberOfMeal}
											addNewFood={this.props.addNewFood}
											setModalActive={this.onChangeModalActive}
											date={currentDate}/>}
										setActive={this.onChangeModalActive}/>
									<div className="add-plus-btn" onClick={this.onChangeModalActive}></div>
							</div>
						</div>
					</div> : null}
			</>
		)
	}
}

export default AddNewDay;