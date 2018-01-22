import axios from 'axios';
import { CLOSE_CHECK_SUCCESS } from './actions';

function closeCheckSuccess(body) {
	return {
		type: CLOSE_CHECK_SUCCESS,
		body,
	};
}

export default function closeCheck(id) {
	return (dispatch) => {
		return axios.put(`https://check-api.herokuapp.com/checks/${id}/close`, 
		{ },
		{
			headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU' }
		})
			.then(res => {
				return dispatch(closeCheckSuccess(res.data))
			})
			.catch(err => console.log(err))
	}
}