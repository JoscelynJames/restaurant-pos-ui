import React, { Component } from 'react';
import styles from './CheckItem.css';

class CheckItem extends Component{

	handleClick() {
		// handle void item
	}

	render() {
		return (
			<div className={styles.conatiner}>
				<div onClick={() => this.handleClick()}>
					<p>X</p>
				</div>
				<div>
					<p>{this.props.name}</p>
				</div>
				<div>
					<p>{this.props.price}</p>
				</div>
			</div>
		)
	}
}

export default CheckItem;