import './foodList.scss';

const FoodList = ({ data, isEdit }) => {
	const menuListClassName = isEdit ? "menu__list_container edit" : "menu__list_container";

	const changeMenuList = () => {
		console.log('change menu list');
	}

	return (
		<div className={menuListClassName}>
			{data.map((item, i) => {
				const {food, quantity, protein} = item;

				return (
					<ul key={i} className="items-list">
						<li className="item">{isEdit ? <input onChange={changeMenuList} type="text" value={food}/> : <span>{food}</span>}</li>
						<li className="item">{isEdit ? <input onChange={changeMenuList} type="text" value={quantity}/> : <span>{quantity}</span>}</li>
						<li className="item">{isEdit ? <input onChange={changeMenuList} type="text" value={protein}/> : <span>{protein}</span>}</li>
					</ul>
				)
			})}
		</div>
	)
};

export default FoodList;