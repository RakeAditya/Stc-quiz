import React from 'react';
import './quizquestion.css';
import { QuizProvider } from '../../pages/quiz/Quiz';
import Loader from '../loader/Loader';
const QuizQuestion = ({ setOption, val }) => {
	const { allData, quesNum, ansArray } = React.useContext(QuizProvider);
	const [curr, setCurr] = React.useState(allData[quesNum]);
	const [click, setClick] = React.useState(-1);
	React.useEffect(() => {
		setCurr(allData[quesNum]);
	}, [quesNum]);
	if (!curr) return <Loader />;
	const options = Object.keys(curr).filter((option) => option.startsWith('Option') && curr[option] !== '');
	return (
		<div className="quiz-content">
			<div className="quiz-ques">
				<h1 className="quiz-ques-no">Question No - {curr.QuestionID}</h1>
				<p className="quiz-ques-content">{curr.Question}</p>
			</div>
			<div className="answers">
				<h1>Answers :</h1>
			</div>
			<div className="quiz-ans">
				<ul>
					{options.map((itm, index) => (
						<li
							key={index}
							onClick={() => {
								setOption(index);
								setClick(index);
							}}
						>
							<button style={{ backgroundColor: `${ansArray[quesNum] === index || val === index ? '#777' : 'white'}` }}> </button>
							<p>{curr[itm]}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuizQuestion;
