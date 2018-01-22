const initalState = {
  tables: [],
  allChecks: [],
	menuItems: [],
	currentCheck: []
};

const reducer = (state = initalState, action) => {
	switch(action.type) {
		case 'FETCH_ALL_TABLES_SUCCESS': 
			return {
				...state,
				tables: action.body
			}
		case 'FETCH_All_CHECKS_SUCCESS': 
			return {
				...state,
				allChecks: action.body
			}
		case 'FETCH_All_MENU_ITEMS_SUCCESS': 
			return {
				...state,
				menuItems: action.body
			}
		case 'FETCH_CHECK_ITEMS_SUCCESS': 
			return {
				...state,
				currentCheck: action.body
			}
		case 'CLOSE_CHECK_SUCCESS': 
			return {
				...state,
				allChecks: [...action.body]
			}
		default: 
			return state;
	}

	};

export default reducer;
