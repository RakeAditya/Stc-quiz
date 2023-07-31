import React, { useState, useEffect, useRef } from 'react';
const TimerWithButton = ({ time, submitFunct }) => {
	const [timer, setTimer] = useState(time); // Initial timer value in seconds (1 hour)
	const timerRef = useRef(null);
	useEffect(() => {
		const handleTick = () => {
			setTimer((prevTimer) => prevTimer - 1);
		};
		timerRef.current = setInterval(handleTick, 1000);
		return () => clearInterval(timerRef.current);
	}, []);
	useEffect(() => {
		if (timer === 0) {
			submitFunct();
			clearInterval(timerRef.current);
		}
	}, [timer]);
	const formatTime = (timeInSeconds) => {
		const hours = Math.floor(timeInSeconds / 3600);
		const minutes = Math.floor((timeInSeconds % 3600) / 60);
		const seconds = timeInSeconds % 60;
		const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
		return formattedTime;
	};
	return <h2>Time : {formatTime(timer)}</h2>;
};
export default TimerWithButton;
