import axios from 'axios';
import { POST_CHECK_SUCCESS } from './actions'

function postCheckSuccess(body) {
	return {
		type: POST_CHECK_SUCCESS,
		body,
	};
}

export default function postCheck(id) {
	return (dispatch) => {
		return axios.post('https://check-api.herokuapp.com/checks',
			{ "tableId": id },
			{
				headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
			}
		)
			.then(res => {
				return dispatch(postCheckSuccess(res.data))
			})
			.catch(err => console.log(err));
	}
}

