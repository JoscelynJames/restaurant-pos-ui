import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import closeCheck from '../../../store/actions/CloseCheck';
import fetchCheckItems from '../../../store/actions/FetchCheckItems';
import styles from './CloseButton.css';

class CloseButton extends Component {
	handleClick() {
		this.props.closeCheck(this.props.checkId);
		this.props.fetchCheckItems(this.props.checkId);
		this.props.history.push(`/check/closed/${this.props.checkId}`);
	}

	render() {
		return (
			<div className={styles.close} onClick={() => this.handleClick()}>
				<p>Close Check</p>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		closeCheck,
		fetchCheckItems,
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(withRouter(CloseButton));

