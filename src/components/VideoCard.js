import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
	const { vid } = props;
	return (
		<Link to={`/watch/${vid.Id}`}>
			<div
				className='card'
				style={{
					backgroundImage: `url(${
						vid.Images[0]
							? vid.Images[0].Url
							: 'https://images.indianexpress.com/2021/05/Lucifer-5B-poster-1200.jpg'
					})`,
				}}
			>
				<div className='gradient'>
					<p className='text'>{vid.Title}</p>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard;
