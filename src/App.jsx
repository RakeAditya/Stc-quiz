import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Quiz } from './pages/index';
const App = () => {
	return (
		<Routes>
			<Route path="/quizhome" element={<Main />} />
			<Route path="/quiz/:id" element={<Quiz />} />
		</Routes>
	);
};

export default App;
