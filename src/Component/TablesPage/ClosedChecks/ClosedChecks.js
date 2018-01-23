import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './ClosedChecks.css';
import Card from '../../Card/Card';
import fetchAllTables from '../../../store/actions/FetchAllTables';

class ClosedChecks extends Component {
	componentWillMount() {
		this.props.fetchAllTables()
	}

	getTableNumber(id) {
		return this.props.allTables.filter(table => {
			if (table.id === id) {
				return table
			}
		});
	}

	render() {
		return (
			<div className={styles.container}>
				{
					this.props.allTables.length === 0 ? null 
					: this.props.allChecks.map(check => {
						const number = this.getTableNumber(check.tableId);
						if (check.closed) {
							return <Card key={check.id} id={check.id} type="table" status="closed" text={number[0].number} />
						}
					})
				}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		allChecks: state.allChecks,
		allTables: state.tables,
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchAllTables,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosedChecks);