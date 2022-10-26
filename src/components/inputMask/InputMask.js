const InputMask = (inputValue) => {
	return inputValue.replace(/[^/\d]/g, '')
}

export default InputMask;