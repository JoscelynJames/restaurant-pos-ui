import axios from 'axios';

function fetchAllChecksSuccess(body) {
	return {
		type: 'FETCH_All_CHECKS_SUCCESS',
		body,
	};
}

export default function fetchAllChecks() {
	return (dispatch) => {
		return axios.get('https://check-api.herokuapp.com/checks', {
			headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
		})
			.then(res => {
				return dispatch(fetchAllChecksSuccess(res.data))
			})
			.catch(err => console.log(err))
	}
}