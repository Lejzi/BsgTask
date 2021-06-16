import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

const Player = (props) => {
	const [video, setVideo] = useState(null);
	const token = useSelector((state) => state.user.token);

	useEffect(() => {
		const loadVideo = async () => {
			const response = await fetch(
				'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'authorization': `Bearer ${token}`,
					},
					body: JSON.stringify({
						MediaId: props.match.params.id * 1,
						StreamType: 'TRIAL',
					}),
				}
			);
			const res = await response.json();

			console.log('load video res: ', res);
			setVideo(res);
		};
		if (video === null) {
			loadVideo();
		}
	});
	if (token === '') return <Redirect to='/' />;

	if (video !== null) {
		return <ShakaPlayer autoPlay src={video.ContentUrl} />;
	} else return <p>Loading...</p>;
};

export default Player;
