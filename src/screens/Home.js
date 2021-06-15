import React, { useEffect } from 'react';
import * as userActions from '../store/actions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);

	if (token === '') return <Redirect to='/' />;

	return <div></div>;
};

export default Home;
