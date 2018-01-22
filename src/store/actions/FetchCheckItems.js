import axios from 'axios';
import { FETCH_CHECK_ITEMS_SUCCESS } from './actions'

function fetchCheckItemsSuccess(body) {
	return {
		type: FETCH_CHECK_ITEMS_SUCCESS,
		body,
	};
}

export default function fetchCheckItems(id) {
	return (dispatch) => {
		return axios.get(`https://check-api.herokuapp.com/checks/${id}`, {
			headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
		})
			.then(res => {
				return dispatch(fetchCheckItemsSuccess(res.data))
			})
			.catch(err => console.log(err))
	}
}