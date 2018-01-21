import axios from 'axios';

function fetchAllTablesSuccess(body) {
	return {
		type: 'FETCH_ALL_TABLES_SUCCESS',
		body,
	};
}

export default function fetchAllTables() {
	return (dispatch) => {
		return axios.get('https://check-api.herokuapp.com/tables', {
			headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU '}
		})
		.then(res => {
			return dispatch(fetchAllTablesSuccess(res.data))
		})
		.catch(err => console.log(err))
	}
}