import React from 'react';
import VideoCard from './VideoCard';

const ScrollList = (props) => {
	const { title, list } = props;
	return (
		<div className='ScrollList'>
			<p className='text-big'>{title}</p>
			<div className='scroll'>
				{list.map((vid, index) => {
					return <VideoCard vid={vid} key={index} />;
				})}
			</div>
		</div>
	);
};

export default ScrollList;
