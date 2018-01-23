import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CheckTotals.css';

class CheckTotals extends Component {

	render() {
		return (
			<div className={styles.totals}>
				<div>
					<p>Tax: ${Number(this.props.check.tax).toFixed(2)}</p>
				</div>
				<div>
					<p>Tip: ${Number(this.props.check.tip).toFixed(2)}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		check: state.currentCheck,
	};
}

export default connect(mapStateToProps)(CheckTotals);