const Calculator = ({data}) => {
	const result = data.reduce((sum, current) => {
		return sum + +(current.protein);
	}, 0);

	return (
		<div className="protein-result">Всего белков: <span>{result}</span></div>
	)
}

export default Calculator;