import React, { Component } from 'react';
import Check from '../Check/Check';
import CheckTotals from './CheckTotals';
import styles from './CheckTotals.css';

class ClosedCheck extends Component {
	render() {
		return (
			<div className={styles.conatiner}>
				<Check checkId={this.props.match.params.id} status="closed"/>
				<CheckTotals />
			</div>
		);
	}
}


export default ClosedCheck;