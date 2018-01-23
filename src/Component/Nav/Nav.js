import React, { Component } from 'react';
import arrow from '../../arrow.png';
import styles from './Nav.css';

class Nav extends Component {
	handleClick() {
		this.props.history.push('/');
	}

	render() {
		return (
			<div className={styles.nav}>
				<div onClick={() => this.handleClick()}>
					<img src={arrow} alt="<" className={styles.img} />
				</div>
				<div onClick={() => this.handleClick()}>
					<p>Go Back</p>
				</div>
			</div>
		);
	}
}

export default Nav;