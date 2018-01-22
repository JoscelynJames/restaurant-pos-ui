import React, { Component } from 'react';
import styles from './CheckItem.css';
import { connect } from 'react-redux';

class CheckItem extends Component{

	handleClick() {
		// handle void item
	}

	matchMenuItem(id) {
		const item = this.props.menuItems.filter(item => {
			return item.id === id
		})
		return item[0]
	}

	render() {
		const menuItem = this.matchMenuItem(this.props.itemId)
		return (
			<div className={styles.conatiner}>
				<div onClick={() => this.handleClick()}>
					<p>X</p>
				</div>
				<div>
					<p>{menuItem.name}</p>
				</div>
				<div>
					<p>{menuItem.price}</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		menuItems: state.menuItems,
	}
}


export default connect(mapStateToProps)(CheckItem);