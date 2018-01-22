import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Check from './Check/Check';
import Menu from './Menu/Menu';
import CloseButton from './Check/CloseButton/CloseButton';
import fetchAllMenuItems from './../../store/actions/FetchAllMenuItems';
import fetchAllChecks from './../../store/actions/FetchAllChecks';
import styles from './OpenCheck.css';

class OpenCheck extends Component {
	componentWillMount() {
		this.props.fetchAllChecks();
		this.props.fetchAllMenuItems();
	}

	getCheckId(id) {
		return this.props.allChecks.filter(check => {
			return check.tableId === id && !check.closed
		})
	}

	render() {
		const checkId = this.getCheckId(this.props.match.params.id);
		if (checkId.length === 0) {
			return null
		} else {
			return (
				<div className={styles.conatiner}>
					<Menu checkId={checkId[0].id}/>
					<div>
						<Check checkId={checkId[0].id} status="open"/>
						<CloseButton checkId={checkId[0].id}/>
					</div>
				</div>
			)
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchAllMenuItems,
		fetchAllChecks,
	}, dispatch)
}

const mapStateToProps = (state) => {
	return {
		allChecks: state.allChecks,
		current: state.currentCheck,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenCheck);