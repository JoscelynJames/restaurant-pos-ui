import axios from 'axios';
import { VOID_ITEM_SUCCESS } from './actions'

function voidItemSuccess(body) {
	return {
		type: VOID_ITEM_SUCCESS,
		body,
	};
}

export default function voidItem(checkId, itemId) {
	console.log(checkId, itemId)
	return (dispatch) => {
		return axios.put(`https://check-api.herokuapp.com/checks/${checkId}/voidItem`,
			{ "orderedItemId": itemId },
			{
				headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
			}
		)
			.then(res => {
				console.log(res.data)
				return dispatch(voidItemSuccess(res.data))
			})
			.catch(err => console.log(err));
	}
}
