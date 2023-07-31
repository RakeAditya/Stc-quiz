import React from 'react';
import './card.css';
const Card = ({ title, strt, endt, timing, noQues, maxMarks, count, popit, setid }) => {
	const [status, setStatus] = React.useState(true);
	const [time, setTime] = React.useState({
		startHours: '',
		startMinutes: '',
		endHours: '',
		endMinutes: '',
		curHours: '',
		curMinutes: '',
	});
	React.useEffect(() => {
		const a = new Date(parseInt(strt));
		const b = new Date(parseInt(endt));
		const c = new Date();
		setTime({
			startHours: a.getHours(),
			startMinutes: a.getMinutes(),
			endHours: b.getHours(),
			endMinutes: b.getMinutes(),
			curHours: c.getHours(),
			curMinutes: c.getMinutes(),
		});
		if (time.curHours > time.startHours && time.curHours < time.endHours) setStatus(true);
	}, []);
	return (
		<div className="box">
			<h3>{title}</h3>
			<h4>Quiz Timing</h4>
			<p>
				{time.startHours > 12 ? time.startHours % 12 : time.startHours}:{time.startMinutes} {time.startHours > 12 ? 'PM ' : 'AM '}
				to {time.endHours > 12 ? time.endHours % 12 : time.endHours}:{time.endMinutes} {time.endHours > 12 ? 'PM' : 'AM'}
			</p>
			<p>Total Questions : {noQues}</p>
			<p>Total Marks : {maxMarks}</p>
			<h4>Quiz Duration</h4>
			<p>
				{timing / 3600} hrs : {timing % 60} minutes
			</p>
			{status ? (
				<button
					onClick={() => {
						popit();
						setid(count);
					}}
				>
					Attempt Quiz
				</button>
			) : (
				<p>
					<b>Test Not available</b>
				</p>
			)}

			<span className="count">{count}</span>
		</div>
	);
};

export default Card;
