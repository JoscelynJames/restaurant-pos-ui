import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Card.css';
import axios from 'axios';
import { withRouter } from 'react-router';
import postCheck from '../../store/actions/PostCheck';

class Card extends Component{

	handleClick() {
		const id = this.props.id;

		if (this.props.status === 'available') {
			this.props.postCheck(id);
			this.props.history.push(`/check/${id}`)
		} else {
			this.props.history.push(`/check/${id}`)
		}
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
	}, dispatch)
}


export default connect(null, mapDispatchToProps)(withRouter(Card));

