import React, { Component } from 'react';
import styles from './CheckItem.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import voidItem from '../../../store/actions/VoidItem';

class CheckItem extends Component{

	handleClick(e) {
		this.props.voidItem(this.props.checkId, this.props.orderedId);
	}

	matchMenuItem(id) {
		const item = this.props.menuItems.filter(item => {
			return item.id === id
		})
		return item[0]
	}

	render() {
		const menuItem = this.matchMenuItem(this.props.itemId)
		return (
		!this.props.voided ? (
				<div className={styles.conatiner} >
					<div className={styles.void} onClick={() => this.handleClick()}>
						<p>X</p>
					</div>
					<div>
						<p>{menuItem.name}</p>
					</div>
					<div>
						<p>{menuItem.price}</p>
					</div>
				</div>
		) : (
			<div className={`${styles.conatiner} ${styles.voided}`} >
				<div>
					<p></p>
				</div>
				<div>
					<p>{menuItem.name}</p>
				</div>
				<div>
					<p>{menuItem.price}</p>
				</div>
			</div>
			) 
		)
	}
}

const mapStateToProps = (state) => {
	return {
		menuItems: state.menuItems,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		voidItem,
	}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(CheckItem);