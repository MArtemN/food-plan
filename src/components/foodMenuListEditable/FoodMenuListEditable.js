import './foodMenuListEditable.scss';

const FoodMenuListEditable = ({data, onChangeMenuList}) => {
	const onChange = (e, id) => {
		onChangeMenuList(e, id);
	}

	const menuList = data.map(item => {
		if (item.food !== 'Вода') {
			return (
				<ul key={item.id} data-id={item.id} className="menu-list__item editMode">
					<li className="item">
						<input
							type="text"
							name="food"
							value={item.food}
							onChange={(e) => onChange(e, item.id)}/>
					</li>
					<li className="item">
						<input
							type="text"
							name="quantity"
							value={item.quantity}
							onChange={(e) => onChange(e, item.id)}/>
					</li>
					<li className="item">
						<input
							type="text"
							name="protein"
							value={item.protein}
							onChange={(e) => onChange(e, item.id)}/>
					</li>
				</ul>
			)
		}
	})

	return <>
		{menuList}
	</>
}

export default FoodMenuListEditable;