import React, { ReactElement, useEffect, useState } from 'react';
import './index.css';
import LIVES_COUNT from '../../constants/lives-count';
import LIVE_EMOJI from '../../constants/live-emoji';

type Props = {
	errorsCount: number;
};

const LivesCounter = ({ errorsCount }: Props): ReactElement => {
	const [lives, setLives] = useState<string[]>([]);

	useEffect(() => {
		const restLives = LIVES_COUNT - errorsCount;
		if (restLives <= 0) {
			setLives([]);
		} else {
			const livesEmojis = Array(restLives).fill(LIVE_EMOJI);
			setLives(livesEmojis);
		}
	}, [errorsCount]);

	return <div className="live-counter__container">{lives}</div>;
};

export default LivesCounter;
