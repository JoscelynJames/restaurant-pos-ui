import React, { Component } from 'react';
import styles from './CheckItem.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ClosedCheckItem extends Component {

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


export default connect(mapStateToProps)(ClosedCheckItem);