import React from 'react';
import './cardlist.css';
import { CardData } from '../../data';
import Card from '../card/Card';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';
import axios from 'axios';
const Cardlist = () => {
	const [load, setLoad] = React.useState(false);
	const [pop, setPop] = React.useState(false);
	const [val, setVal] = React.useState(0);
	const [quizData, setQuizData] = React.useState([]);
	React.useEffect(() => {
		const handleData = async () => {
			try {
				setLoad(true);
				const resData = await axios.get('http://13.235.49.202:5000/api/test/all');
				const Data = resData.data.data;
				setQuizData(Data);
				setLoad(false);
			} catch (error) {
				console.log(error.message);
			}
		};
		handleData();
	}, []);
	if (load) return <Loader />;
	return (
		<div className="quiz-home">
			<h1>Quiz section</h1>
			<div className="section">
				{quizData.map((itm, index) => (
					<Card
						title={itm.NAME}
						strt={itm.StartTime}
						endt={itm.EndTime}
						timing={itm.Duration}
						noQues={itm.NoOfQuestions}
						maxMarks={itm.MaxMarks}
						count={index + 1}
						key={index}
						popit={() => setPop((pre) => !pre)}
						setid={(e) => setVal(e)}
					/>
				))}
			</div>
			<div>
				{pop && (
					<Popup
						click={() => setPop((pre) => !pre)}
						value={quizData[val - 1].Description}
						link={quizData[val - 1].TestID}
						time={quizData[val - 1].Duration}
						name={quizData[val - 1].NAME}
						state={false}
					/>
				)}
			</div>
		</div>
	);
};

export default Cardlist;
