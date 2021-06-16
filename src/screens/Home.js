import React, { useEffect } from 'react';
import * as videoActions from '../store/actions/video';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import ScrollList from '../components/ScrollList';

const Home = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);
	const userName = useSelector((state) => state.user.name);
	const videoList = useSelector((state) => state.video.videoList);
	const popularList = useSelector((state) => state.video.popularList);
	const videoLoaded = useSelector((state) => state.video.loaded);
	useEffect(() => {
		if (!videoLoaded && token !== '') {
			dispatch(videoActions.loadList(2, 'LOAD_LIST'));
			dispatch(videoActions.loadList(3, 'LOAD_POPULAR'));
		}
	});
	if (token === '') return <Redirect to='/' />;

	return (
		<div className='Home'>
			<div className='hero'>
				<p className='hello'>Hello {userName}!</p>
			</div>

			{videoLoaded && videoList.length > 0 && (
				<ScrollList title='Continue watching: ' list={videoList} />
			)}
			{videoLoaded && popularList.length > 0 && (
				<ScrollList title='Popular right now: ' list={popularList} />
			)}
		</div>
	);
};

export default Home;
