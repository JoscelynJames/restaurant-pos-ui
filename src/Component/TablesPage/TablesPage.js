import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchAllTables from '../../store/actions/FetchAllTables';
import fetchAllChecks from '../../store/actions/FetchAllChecks';
import Card from '../Card/Card';
import styles from './TablesPage.css';

class TablesPage extends Component {

	componentWillMount() {
		this.props.fetchAllTables();
		this.props.fetchAllChecks();
	}

	tableAvaliability() {
		let openTableIds = [];
		
		this.props.allChecks.map(check => {
			if (!check.closed) openTableIds.push(check.tableId)
		})
		
		return openTableIds;
	}

	render() {
		const openTables = this.tableAvaliability();
		return (
			<div>
				<div className={styles.container}>
					<div className={styles.tables}>
						{
							this.props.tables.map(table => {
								if(!openTables.includes(table.id)) {
									return <Card key={table.id} id={table.id} type="table" status="available" text={table.number} />
								}
							})
						}
					</div>
					<div className={styles.tables}>
						{
							this.props.tables.map(table => {
								if(openTables.includes(table.id)) {
									return <Card key={table.id} id={table.id} type="table" status="open" text={table.number} />
								}
							})
						}
					</div>
				</div>
				<div className={styles.closedButton}>
					<Card status="closed" type="button" text="closed checks"/>
				</div>
			</div>
		);
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchAllTables,
		fetchAllChecks,
	}, dispatch)
}

const mapStateToProps = (state) => {
	return {
		tables: state.tables,
		allChecks: state.allChecks,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TablesPage);

