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
		if (this.props.status === 'available') {
			this.props.postCheck(id);
			this.props.history.push(`/check/${id}`)
		}; 

		if (this.props.status === 'open') {
			this.props.history.push(`/check/${id}`)
		};

		if (this.props.status === 'closed') {
			this.props.history.push(`/check/closed/${id}`)
		};

		if (this.props.type === 'button') {
			this.props.history.push(`/check/closed`)
		};

		if (this.props.type === 'menu') {
			this.props.addItemToCheck(this.props.checkId, id)
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

