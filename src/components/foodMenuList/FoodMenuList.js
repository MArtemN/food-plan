import './foodMenuList.scss';

const FoodMenuList = ({data}) => {
	const menuList = data.map(item => {
		if (item.food !== 'Вода') {
			return (
				<ul key={item.id} className="menu-list__item">
					<li className="item">
						<span>{item.food}</span>
					</li>
					<li className="item">
						<span>{item.quantity}</span>
					</li>
					<li className="item">
						<span>{item.protein}</span>
					</li>
				</ul>
			)
		}
	});

	return <>
		{menuList}
	</>
}

export default FoodMenuList;