const initalState = {
  tables: [],
  allChecks: [],
	menuItems: [],
	currentCheck: {}
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
		case 'ADD_ITEM_TO_CHECK_SUCCESS': 
			return {
				...state,
				currentCheck: {
					...state.currentCheck, 
					orderedItems: [...state.currentCheck.orderedItems, action.body]
				}
			}
		case 'VOID_ITEM_SUCCESS': 
			return {
				...state,
				currentCheck: {
					...state.currentCheck, 
					orderedItems: 
						state.currentCheck.orderedItems.map(item => {
							if (item.id === action.body.id) {
								item = action.body
							} 
							return item
						})
				}
			}
		default: 
			return state;
	}

	};

export default reducer;
