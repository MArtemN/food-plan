import './dateHeader.scss';

const DateHeader = ({date}) => {
	return (
		<h2 className="food__date">{date}</h2>
	)
};

export default DateHeader;