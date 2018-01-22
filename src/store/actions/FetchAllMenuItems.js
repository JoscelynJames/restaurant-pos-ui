import axios from 'axios';
import { FETCH_All_MENU_ITEMS_SUCCESS } from './actions';

function fetchAllMenuItemsSuccess(body) {
	return {
		type: FETCH_All_MENU_ITEMS_SUCCESS,
		body,
	};
}

export default function fetchAllMenuItems() {
	return (dispatch) => {
		return axios.get('https://check-api.herokuapp.com/items', {
			headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3OTczYjk1LWRhYmUtNDkxOC1iNmQyLTAxODcyZjJlNzE1YSIsIm5hbWUiOiJqdW5pb3IgIzEifQ.YrudbiglqwaOf7XLCEKDmHYKXZt3-5fV_O97nApv8yU ' }
		})
			.then(res => {
				return dispatch(fetchAllMenuItemsSuccess(res.data))
			})
			.catch(err => console.log(err))
	}
}