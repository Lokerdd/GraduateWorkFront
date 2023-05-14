import React, { memo, useEffect, useState } from 'react';

import CustomSelect from '../../reuse/CustomSelect';

import './Player.scss';

function Player({ seasonArray }) {

	const [season, setSeason] = useState();
	const [episode, setEpisode] = useState();

	useEffect(() => {
		setSeason(seasonArray[0]?.season);
	}, [seasonArray]);

	useEffect(() => {
		setEpisode(seasonArray.find((item) => 
			item.season === season
		)?.episodes[0].number);
	}, [season]);

	const seasonOptions = seasonArray.length ? seasonArray.map((item) => {
		return {value: item.season, label: `Сезон ${item.season}`};
	}) : [];

	const episodeOptions = seasonArray.find((item) => 
		item.season === season
	)?.episodes.length
		? seasonArray.find((item) => item.season === season)
			.episodes.map((item) => {
				return {value: item.number, label: `Серия ${item.number}`};
			}) 
		: [];

	return (
		<>
			<iframe 
				className='video'
				src={seasonArray.find((item) => 
					item.season === season
				)?.episodes.find((item) => 
					item.number === episode
				)?.link}
				allowFullScreen
			></iframe>
			<div className='player-controller'>
				{ seasonOptions.find((item) => item.value === season) && (
					<CustomSelect 
						options={seasonOptions}
						placeholder={`Сезон ${season}`}
						isNotMulti
						setFilter={setSeason}
					/>
				)}
				{episodeOptions && episode && (
					<CustomSelect 
						options={episodeOptions}
						placeholder={`Серия ${episode}`}
						isNotMulti
						setFilter={setEpisode}
					/>
				)}
			</div>
		</>
	);
}

export default memo(Player);