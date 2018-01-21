import React, { Component } from 'react';
import styles from './Card.css';

class TableCard extends Component{

	render() {
		return (
			<div className={`${styles[this.props.type]} ${styles[this.props.status]}`} >
				<p className={styles.tableNumber}>{this.props.number}</p>
			</div>
		);
	}
};

export default TableCard;

