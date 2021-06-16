export const auth = () => {
	return async (dispatch, getState) => {
		const response = await fetch(
			'https://thebetter.bsgroup.eu/Authorization/SignIn',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: 'anonymous',
					password: 'string',
				}),
			}
		);
		const res = await response.json();

		dispatch({ type: 'AUTH', res });
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch({ type: 'LOGOUT' });
	};
};
