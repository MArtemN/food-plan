const Calculator = ({data}) => {
	let proteinArr,
		result;

	proteinArr = data.map(item => {
		const {protein} = item;

		return +(protein);
	});

	result = proteinArr.reduce((sum, elem) => {
		return sum + elem;
	}, 0);

	return (
		<div className="protein-result">Всего белков: <span>{result}</span></div>
	)
}

export default Calculator;