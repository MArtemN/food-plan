import './foodMenuList.scss';

const FoodMenuList = ({data}) => {
const {id, food, quantity, protein} = data;

return (
	<div className="menu__list_container">
		<ul data-id={id} className="items-list">
			<li className="item"><span>{food}</span></li>
			<li className="item"><span>{quantity}</span></li>
			<li className="item"><span>{protein}</span></li>
		</ul>
	</div>
)
}

export default FoodMenuList;