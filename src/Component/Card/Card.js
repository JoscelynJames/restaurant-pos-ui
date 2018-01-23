import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Card.css';
import { withRouter } from 'react-router';
import postCheck from '../../store/actions/PostCheck';
import addItemToCheck from '../../store/actions/AddItemToCheck';

class Card extends Component{

	handleClick() {
		const id = this.props.id;
		switch(this.props.status) {
			case 'available':
				this.props.postCheck(id);
				this.props.history.push(`/check/${id}`);
				break;
			case 'open':
				this.props.history.push(`/check/${id}`);
				break;
			case 'closed':
				this.props.history.push(`/check/closed/${id}`);
				break;
			default:
				break;
		};

		switch(this.props.type) {
			case 'button': 
				this.props.history.push(`/check/closed`);
				break;
			case 'menu':
				this.props.addItemToCheck(this.props.checkId, id);
				break;
			default:
				break;
		};
	}

	render() {
		return (
			<div className={`${styles[this.props.type]} ${styles[this.props.status]}`} onClick={() => this.handleClick()}>
				<p className={styles.text}>{this.props.text}</p>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		postCheck,
		addItemToCheck,
	}, dispatch)
}


export default connect(null, mapDispatchToProps)(withRouter(Card));

