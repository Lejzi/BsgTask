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
				token: action.res.AuthorizationToken.token,
				name: action.res.User.UserName,
			};
		default:
			return state;
	}
};

export default userReducer;
