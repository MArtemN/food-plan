import { useState } from 'react';

const initNotes = [
	{text: 'note1', isEdit: false},
	{text: 'note2', isEdit: false},
	{text: 'note3', isEdit: false},
];

const Check = () => {
	const [notes, setNotes] = useState(initNotes);

	function startEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = true;
		setNotes(copy);
	}

	function changeNote(index, e) {
		const copy = Object.assign([], notes);
		copy[index].text = e.target.value;
		setNotes(copy);
	}

	function endEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = false;
		setNotes(copy);
	}

	const result = notes.map((note, index) => {
		let item;

		if (!note.isEdit) {
			item = <span onClick={() => startEdit(index)}>{note.text}</span>
		} else {
			item = <input
				type="text"
				value={note.text}
				onChange={(e) => changeNote(index, e)}
				onBlur={() => endEdit(index)}
				autoFocus
			/>
		}

		return <li key={index}>{item}</li>
	});

	return <ul>
		{result}
	</ul>
};

export default Check;