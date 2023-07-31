import React from 'react';
import QuizQuestion from '../quizQuestion/QuizQuestion';
import { QuizProvider } from '../../pages/quiz/Quiz';
import './quizpanel.css';
import Loader from '../loader/Loader';
const QuizPanel = () => {
	const { allData, quesNum, setQues, setAnswer, ansArray, handleSubmit } = React.useContext(QuizProvider);
	const [choosen, setChoosen] = React.useState(-1);
	if (!allData) return <Loader />;
	const handleNext = () => {
		if (choosen === -1 && ansArray[quesNum] === -1 && choosen === ansArray[quesNum]) {
			setQues(quesNum + 1);
		} else {
			setQues(quesNum + 1);
			setAnswer(choosen);
			setChoosen(-1);
		}
	};
	const handleBack = () => {
		setQues(quesNum - 1);
	};
	return (
		<div className="quiz-panel-home">
			<QuizQuestion setOption={(e) => setChoosen(e)} val={choosen} />
			<div className="quiz-footer">
				{quesNum > 0 && (
					<button className="foot-btn btn-1" onClick={handleBack}>
						Back
					</button>
				)}
				{quesNum === allData.length - 1 ? (
					<button className="foot-btn btn-2" onClick={handleSubmit}>
						Submit
					</button>
				) : (
					<button className="foot-btn btn-2" onClick={handleNext}>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default QuizPanel;
