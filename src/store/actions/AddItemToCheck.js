import axios from 'axios';
import { ADD_ITEM_TO_CHECK_SUCCESS } from './actions'

function addItemToCheckSuccess(body) {
	return {
		type: ADD_ITEM_TO_CHECK_SUCCESS,
		body,
	};
}

export default function addItemToCheck(checkId, itemId) {
	return (dispatch) => {
		return axios.put(`https://check-api.herokuapp.com/checks/${checkId}/addItem`,
			{ itemId: itemId },
			{
				headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
			}
		)
			.then(res => {
				return dispatch(addItemToCheckSuccess(res.data))
			})
			.catch(err => console.log(err));
	}
}
