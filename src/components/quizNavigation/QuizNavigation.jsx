import React from 'react';
import './quiznavigation.css';
import { QuizProvider } from '../../pages/quiz/Quiz';
const QuizNavigation = ({ arr }) => {
	const { setQues, quesNum } = React.useContext(QuizProvider);
	return (
		<div className="quiz-nav-home">
			<div className="quiz-nav-head">
				<h1>Question Navigation</h1>
			</div>
			<div className="quiz-nav-body">
				<ul>
					{arr.map((itm, index) => (
						<li key={index}>
							<button
								style={{ backgroundColor: ` ${itm >= 0 ? 'rgb(120, 223, 120)' : quesNum === index ? '#555' : '#fff'} ` }}
								onClick={() => setQues(index)}
							>
								{index + 1}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuizNavigation;
