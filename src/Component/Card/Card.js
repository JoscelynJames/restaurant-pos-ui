import React, { Component } from 'react';
import styles from './Card.css';
import axios from 'axios';
import { withRouter } from 'react-router';

class Card extends Component{

	handleClick() {
		if (this.props.status === 'open') {
			this.props.history.push(`./check/${this.props.number}`)
		} else {
			axios.post('https://check-api.herokuapp.com/checks', 
			{ tableId: this.props.id }, 
			{
				headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
			}
		)
		.then(res => {
			this.props.history.push(`./check/${this.props.number}`)
		})
		.catch(err => console.log(err))
		}
	}

	render() {
		return (
			<div className={`${styles[this.props.type]} ${styles[this.props.status]}`} onClick={() => this.handleClick()}>
				<p className={styles.tableNumber}>{this.props.number}</p>
			</div>
		);
	}
};

export default withRouter(Card);

