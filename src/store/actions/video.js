export const loadList = (listId, type) => {
	return async (dispatch, getState) => {
		const token = getState().user.token;
		const response = await fetch(
			'https://thebetter.bsgroup.eu/Media/GetMediaList',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'authorization': `Bearer ${token}`,
				},
				body: JSON.stringify({
					MediaListId: listId,
					IncludeCategories: false,
					IncludeImages: true,
					IncludeMedia: true,
					PageNumber: 1,
					PageSize: 15,
				}),
			}
		);
		const res = await response.json();

		dispatch({ type, res });
	};
};
