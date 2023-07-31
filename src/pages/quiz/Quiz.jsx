import React from 'react';
import './quiz.css';
import { Loader } from '../../components';
import { useParams, useLocation } from 'react-router-dom';
import { QuizNavigation, QuizPanel } from '../../components';
import TimerWithButton from '../../components/timer/TimerWithButton';
import Popup from '../../components/popup/Popup';
import axios from 'axios';
export const QuizProvider = React.createContext({});
const Quiz = () => {
	const { id } = useParams();
	const [pop, setPop] = React.useState(false);
	const { state } = useLocation();
	const [load, setLoad] = React.useState(false);
	const [allData, setAllData] = React.useState([]);
	const [quesNum, setQuesNum] = React.useState(0);
	const [ansArray, setAnsArray] = React.useState([]);
	const setAnswer = (val) => {
		const newArray = [...ansArray];
		newArray[quesNum] = val;
		setAnsArray(newArray);
	};
	const [count, setCount] = React.useState(0);
	const handleSubmit = async () => {
		try {
			// const resp = {
			// 	"TestID" : id,
			// 	"ResponseArray" : ansArray,
			// }
			// await axios.post('', resp);
			// setTimeout(() => {
			// 	setLoad(false);
			// 	navigate('/index');
			// }, 2000);
			ansArray.forEach((itm) => {
				if (itm !== -1) {
					setCount((pre) => pre + 1);
				}
			});
			setPop(true);
		} catch (error) {
			console.log(error);
		}
	};
	const setQues = (e) => setQuesNum(e);
	const fetchQuiz = async () => {
		try {
			setLoad(true);
			const baseUrl = 'http://13.235.49.202:5000/api/test';
			const url = `${baseUrl}/${id}`;
			const data = await axios.get(url);
			setAllData(data.data.data);
			setAnsArray(Array(data.data.data.length).fill(-1));
			setLoad(false);
		} catch (error) {
			console.log(error.message);
		}
	};
	React.useEffect(() => {
		if (allData.length === 0) {
			// Fetch data only if allData is empty (i.e., no data fetched yet)
			fetchQuiz(quesNum);
		}
	}, [allData, quesNum]);
	if (load) return <Loader />;
	if (pop) return <Popup state={true} value={ansArray.length} name={count} />;
	return (
		<QuizProvider.Provider value={{ allData, quesNum, setQues, setAnswer, ansArray, handleSubmit }}>
			<div className="quiz-component">
				<div className="quiz-head">
					<h1>{state.name}</h1>
					<div onClick={() => setQuesNum((pre) => pre + 1)}>
						<TimerWithButton time={state.time} submitFunct={handleSubmit} />
					</div>
				</div>
				<div className="quiz-body">
					<div className="quiz-left">
						<QuizPanel />
					</div>
					<div className="quiz-rit">
						<QuizNavigation arr={ansArray} />
					</div>
				</div>
			</div>
		</QuizProvider.Provider>
	);
};

export default Quiz;
