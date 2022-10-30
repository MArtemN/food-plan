import './modal.scss';

const Modal = ({active, content, title, setActive}) => {
	const getScrollWidth = () => {
		const div = document.createElement('div');
		div.style.cssText = `
			width: 50px;
			height: 50px;
			visibility: hidden;
			overflow-y: scroll;
		`;
		document.body.appendChild(div);

		const scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	const onChangeActive = (e) => {
		if (e.target.classList.contains('active')) {
			setActive();
		}
	}

	if (active) {
		document.body.classList.add('hidden');
		document.body.style.marginRight = getScrollWidth() + 'px';
	}

	return (
		<div className={active ? "modal modal__overlay active" : "modal modal__overlay"} onClick={onChangeActive}>
			<div className={active ? "modal__content modal__content_active" : "modal__content"}>
				<h2 className="form-title">{title}</h2>
				{content}
			</div>
		</div>
	)
}

export default Modal;