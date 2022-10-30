import DateHeader from '../dateHeader/DateHeader';
import MealItem from '../mealItem/MealItem';
import { v4 as uuidv4 } from 'uuid';

import './foodContainer.scss';

const FoodContainer = ({data, date, addNewFood, deleteMealItem, saveChangesMenu}) => {
	const foodDataArr = Object.entries(data[1]);

	const mealItem = foodDataArr.map((item) => {
		return (
			<MealItem
				key={uuidv4()}
				numberOfMeal={item[0]}
				menuListItems={item[1]}
				addNewFood={addNewFood}
				deleteMealItem={deleteMealItem}
				saveChangesMenu={saveChangesMenu}
				date={date}/>
		)
	});

	return (
		<div className="food food__container">
			<DateHeader date={date}/>
			<div className="food__menu-container">
				{mealItem}
			</div>
		</div>
	)
}

export default FoodContainer;