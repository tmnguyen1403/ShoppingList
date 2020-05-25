import React, {Component} from 'react';
import DeleteButton from './DeleteButton';
import ItemList from './ItemList';

class ShoppingList extends Component {
	state = {
		value: '',
		items: []
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	addItem = event => {
		event.preventDefault();
		this.setState(oldState => ({
			items: [...oldState.items, this.state.value],
		}));
	};

	deleteLastItem = event => {
		this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
	};

	inputIsEmpty = () => {
		return this.state.value === '';
	};

	noItemsFound = () => {
		return this.state.items.length === 0;
	};
	render() {

		return (
			<React.Fragment>
			<h2>Shopping List</h2>
			<form onSubmit={this.addItem}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button disabled={this.inputIsEmpty()} onClick={this.addItem}>Add</button>
			</form>
			<DeleteButton handleDelete={this.deleteLastItem} items={this.state.items}/>
			<ItemList items={this.state.items} />
			</React.Fragment>
		)
	}
}

export default ShoppingList;
