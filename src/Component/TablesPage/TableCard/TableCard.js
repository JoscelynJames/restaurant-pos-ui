import React, { Component } from 'react';
import styles from './TableCard.css';

class TableCard extends Component{
	render() {
		return (
			<div className={styles.card}>
				<p className={styles.tableNumber}>1</p>
			</div>
		);
	}
};

export default TableCard;

