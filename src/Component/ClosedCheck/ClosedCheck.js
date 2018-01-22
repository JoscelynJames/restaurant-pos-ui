import React, { Component } from 'react';
import Check from '../Check/Check';
import CheckTotals from './CheckTotals';

class ClosedCheck extends Component {

	render() {
		return (
			<div>
				<Check checkId={this.props.match.params.id} status="closed"/>
				<CheckTotals />
			</div>
		)
	}
}


export default ClosedCheck;