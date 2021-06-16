const initialState = {
	videoList: [],
	popularList: [],
	loaded: false,
};

const videoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_LIST':
			return {
				...state,
				videoList: action.res.Entities,
				loaded: true,
			};
		case 'LOAD_POPULAR':
			return {
				...state,
				popularList: action.res.Entities,
			};
		default:
			return state;
	}
};

export default videoReducer;
