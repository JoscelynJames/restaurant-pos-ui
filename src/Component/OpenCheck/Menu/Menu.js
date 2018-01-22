import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../../Card/Card';
import styles from './Menu.css';

class Menu extends Component{

	handleClick() {
		console.log(this.props)
		// this.props.addItemToCheck(this.props.checkId, )
	}

	render() {
		return (
			<div className={styles.menu}>
			{
				this.props.menuItems.map(item => {
					return (
						<Card 
							key={item.id} 
							id={item.id} 
							type="menu" 
							text={item.name} 
							price={item.price}
							checkId={this.props.checkId}
						/>
					)
				})
			}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		menuItems: state.menuItems,
	}
}

export default connect(mapStateToProps)(Menu);