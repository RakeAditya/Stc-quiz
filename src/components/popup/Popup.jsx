import React from 'react';
import { useNavigate } from 'react-router-dom';
import './popup.css';
const Popup = ({ click, value, link, time, name, state }) => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		if (!state) navigate(`/quiz/${link}`, { state: { time, name } });
		else navigate('/quizhome');
	};
	if (state)
		return (
			<div className="pop-main">
				<div className="pop-section">
					<div className="pop-content">
						<h2 style={{ marginTop: '30px' }}>You have successfully completed the Quiz</h2>
						<p style={{ textAlign: 'center' }}>
							Total Attempts = {name} out of {value}
						</p>
					</div>
					<div className="pop-footer">
						<button onClick={handleNavigate}>Go to Dashboard</button>
					</div>
				</div>
			</div>
		);
	return (
		<div className="pop-main">
			<div className="pop-section">
				<div className="pop-head">
					<h1>Quiz Name</h1>
					<button onClick={click}>X</button>
				</div>
				<div className="pop-content">
					<h2>Description</h2>
					<p>{value}</p>
				</div>
				<div className="pop-footer">
					<button onClick={handleNavigate}>Attempt Now</button>
					<button onClick={click}>Go back</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
