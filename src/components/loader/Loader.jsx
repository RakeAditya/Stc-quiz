import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import './loader.css';
const Loader = () => {
	return (
		<div className="home">
			<h1>Loading...</h1>
			<div>
				<ClockLoader color={'#263238'} loading={true} size={100} />
			</div>
		</div>
	);
};

export default Loader;
