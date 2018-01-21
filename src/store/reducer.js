const initalState = {
  tables: [],
  allChecks: [],
  closedChecks: []
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
		default: 
			return state;
	}

	};

export default reducer;
