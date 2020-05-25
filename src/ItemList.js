import React from 'react';

function ItemList(props) {

	const {items} = props;

	return (
		<React.Fragment>
			<p className="items">Items</p>
			<ol className="item-list">
				{items.map((item, index) => <li key={index}>{item}</li>)}
			</ol>
		</React.Fragment>
	);
}

export default ItemList;
