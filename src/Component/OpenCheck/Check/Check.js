import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Check.css';
import CheckItem from './CheckItem/CheckItem';
import fetchCheckItems from './../../../store/actions/FetchCheckItems';


class Check extends Component {
	componentWillMount() {
		this.props.fetchCheckItems(this.props.checkId); 
	}

	render() {
		return (
			<div className={styles.check}>
				{this.props.check.orderedItems === undefined ? null 
					: this.props.check.orderedItems.map((item, i) => {
							return <CheckItem key={i} itemId={item.itemId} />
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		check: state.currentCheck,
		menuItems: state.menuItems,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchCheckItems,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Check);