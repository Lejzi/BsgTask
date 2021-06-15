import React, { useEffect } from 'react';
import logo from '../assets/logo.png';

import * as userActions from '../store/actions/user';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Splash = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);

	useEffect(() => {
		if (token === '') {
			dispatch(userActions.auth());
		}
	});

	if (token !== '') return <Redirect to='/home' />;

	return (
		<div className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
		</div>
	);
};

export default Splash;
