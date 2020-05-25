
import React from 'react';

function DeleteButton(props) {
	const {handleDelete, items} = props;
	return (
		<button onClick={handleDelete} disabled={items.length === 0}>
			Delete Last Item
		</button>
	);
}

export default DeleteButton;
