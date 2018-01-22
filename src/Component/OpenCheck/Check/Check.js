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

	getName(id) {
		return this.props.menuItems.filter(item => {
			if(item.id === id) {
				return item
			}
		})
	}

	render() {
		return (
			<div className={styles.check}>
				{this.props.check.length === 0 || this.props.menuItems.length === 0 ? null 
				: this.props.check.orderedItems.map(item => {
					console.log(this.props)
					const menuItem = this.getName(item.itemId);
					console.log(menuItem)
					return <CheckItem key={item.itemId} name={menuItem[0].name} price={menuItem[0].price}/>
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