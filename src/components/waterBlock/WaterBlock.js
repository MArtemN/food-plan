import './waterBlock.scss';

const WaterBlock = ({data, editMode, onChangeMenuList}) => {
	const onChange = (e, id) => {
		onChangeMenuList(e, id);
	}

	const water = data.map(item => {
		if (editMode) {
			return (
				<input
					key={item.id}
					type="text"
					name="quantity"
					value={item.quantity}
					onChange={(e) => onChange(e, item.id)}/>
			)
		}
		return (
			<span key={item.id}>{item.quantity ? ' ' + item.quantity : ' 0'}</span>
		)
	});
	return (
		<div className="water">Вода:
			{water}
		</div>
	)
}

export default WaterBlock;