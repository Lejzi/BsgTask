const initialState = {
	uid: '',
	token: '',
	name: '',
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH':
			return {
				...state,
				uid: action.res.User.Id,
				token: action.res.AuthorizationToken.Token,
				name: action.res.User.UserName,
			};
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
};

export default userReducer;
